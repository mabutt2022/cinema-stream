import { useState } from 'react';
import { signUp } from '../../utilities/services/users'
import '../../pages/AuthPage/AuthPage.css'
import './SignUpForm.css'

const defaultState = {
    name: '',
    email: '',
    password: '',
    confirm: '',
    address: '',
    phone: '',
    nickname: '',
    error: ''
}

export default function SignUpForm({ setUser }) {
    const [formData, setFormData] = useState(defaultState)

    const { name, email, password, confirm, address, phone, nickname, error } = formData;

    const handleSubmit = async (e) => {
        // when we submit we basically just grab whatever we have in
        // the state.
        e.preventDefault();

        try {
            const { name, password, email, address, phone, nickname } = formData;
            const data = { name, password, email, address, phone, nickname }

            const user = await signUp(data)
            // as soon as we get the decoded data from the creat account api call
            // (derived fromt he jwt in local storage), we can update app.js to store
            // user in state
            setUser(user)
        } catch (err) {
            setFormData({
                ...formData,
                error: 'Sign up Failed - Try again!'
            })
        }
    }


    // const handleChange = (e) => {
    //     const newFormData = { ...formData, [e.target.name]: e.target.value }
    //     window.alert( JSON.stringify(newFormData ) )
    //     setFormData(newFormData)
    // }

    function handleChange(evt) {
        // Replace with new object and use a computed property
        // to update the correct property
        const newFormData = {
            ...formData, // use the existing formData
            [evt.target.name]: evt.target.value, // override whatever key with the current fieldd's value
            error: '' // clear any old errors as soon as the user interacts with the form
        };
        setFormData(newFormData);
    }

    const disabled = (password !== confirm) || !name || !email || !password || !confirm

    return (
        <div className="formm">
            <form onSubmit={handleSubmit} autoComplete="off">
                <h1>Sign Up</h1>
                <div className='info-auth'>
                <input placeholder='Name' className='email' type="text" name="name" id="name" value={name} onChange={handleChange} required />

                <input placeholder='Email' className='email' type="text" name="email" id="email" value={email} onChange={handleChange} required />

                <input placeholder='Password' className='email' type="password" name="password" id="password" value={password} onChange={handleChange} required />

                <input placeholder='Confirm Password' className='email' type="password" name="confirm" id="confirm" value={confirm} onChange={handleChange} required />

                <input placeholder='Address' className='email' type="text" name="address" id="address" value={address} onChange={handleChange} required />

                <input placeholder='Phone' className='email' type="text" name="phone" id="phone" value={phone} onChange={handleChange} required />

                <input placeholder='Nickname' className='email' type="text" name="nickname" id="nickname" value={nickname} onChange={handleChange} required />
                </div>
                <div className='btn'>
                <button className='btn-primary' type="submit" disabled={disabled}>Sign up</button>
                </div>
            </form>
            {error && <p className="error-message">&nbsp;{error}</p>}
        </div>

    )
}