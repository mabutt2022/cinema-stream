// import { PrismaClient } from '@prisma/client'
const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()
const bcrypt = require('bcrypt');
const User = require('../../models/user');
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
            res.status(400).json("Invalid Credentials");
        }
    } catch (err) {
        res.status(400).json("Invalid Credentials");
    }
}

// async function login(req, res, next) {
//     try {
//         const pw = req.body.password;
//         const email = req.body.email;

//         const user = await User.findOne({email})

//         if(user && isValidPassword(pw, user.password)){
//             const token = createJWT(user)
//             res.json(token)
//         }else{
//             res.status(400).json("Invalid Credentials");
//         }
//     } catch (err) {
//         res.status(400).json("Invalid Credentials");
//     }
// }

async function checkToken(req, res, next) {
    res.json(req.exp);
}

module.exports = {
    create,
    login,
    checkToken
}