const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt');
// const User = require('../../models/user');
const { createJWT, isValidPassword } = require('../../helpers/auth')
const SALT_ROUNDS = 6;

async function create (req, res, next) {
    try {
        const {name, email, address, phone, nickname} = req.body
        const password = await bcrypt.hash(req.body.password, SALT_ROUNDS);
        const user = await prisma.user.create({
            data: {
                name, email, password,
                profile: {
                    create: {
                        address,
                        phone,
                        nickname
                    }
                }
            },select: {
                id: true,
                name: true,
                email: true
            }
        })
        const token = createJWT(user)
        res.json(token)
    }catch(err) {
        console.log(err)
        res.status(400).json(err);
    }
}

// async function create (req, res, next){
//     try{
//         const user = await User.create(req.body);
//         const token = createJWT(user)
//         res.json(token)
//     }catch(err){
//         res.status(400).json(err);
//     }
// }

async function login(req, res, next) {
    try {
        const pw = req.body.password;
        const email = req.body.email;
        const user = await prisma.user.findUnique({
            where: {
                email
            }
        })
        // const user = await User.findOne({email})

        if(user && isValidPassword(pw, user.password)){
            const token = createJWT(user)
            res.json(token)
        }else{
            console.log(req.user)
            res.status(400).json("Invalid Credentials");
        }
    } catch (err) {
        console.log(err)
        res.status(400).json("Invalid Credentials");
    }
}

async function checkToken(req, res, next) {
    res.json(req.exp);
}

async function changePassword(req, res, next) {
    try {
        const {oldPassword, newPassword} = req.body;
        const pw = oldPassword;
        const user = await prisma.user.findUnique({
            where: {
                id: req.user.id
            }
        })
        const validatePassword = await isValidPassword(pw, user.password);
        // const oldPass = await bcrypt.compare(oldPassword, user.password)
        const userVal = user && validatePassword
        if(userVal){
            const password = await bcrypt.hash(newPassword, SALT_ROUNDS);
            const updatedUser = await prisma.User.update({
                where: {
                    id: req.user.id
                },
                data: {
                    password
                }
            })
            res.json('Password Updated')
        }else{
            res.status(400).json("Invalid Credentials");
        }
    } catch (error) {
        console.error(error);
    }
}

async function updateUserInfo(req, res, next) {
    try {
        const {name, address, phone, nickname} = req.body
        const user = await prisma.user.update({
            where: {
                id: req.user.id
            },
            data: {
                name,
                profile: {
                    update: {
                        address,
                        phone,
                        nickname
                    }
                }
            }
        })
        res.json('User Updated')
    } catch (error) {
        console.error(error);
    }
}

async function getUserProfile(req, res, next) {
    try {
        const user = await prisma.user.findUnique({
            where: {
                id: req.user.id
            }, select: {
                name: true,
                email: true
            }
        })
        const profile = await prisma.profile.findUnique({
            where: {
                userId: req.user.id
            }, select: {
                address: true,
                phone: true,
                nickname: true
            }
        })
        const userData = {...user, ...profile}
        res.json(userData)
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    create,
    login,
    checkToken,
    changePassword,
    updateUserInfo,
    getUserProfile
}