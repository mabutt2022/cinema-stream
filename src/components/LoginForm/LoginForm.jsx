import { useState } from 'react';
import { login } from '../../utilities/services/users'
import './LoginForm.css'
const defaultState = {
    name: '',
    password: '',
    error: ''
}

export default function LoginForm({ setUser }) {
    const [formData, setFormData] = useState(defaultState)

    const { email, password, error } = formData;

    const handleSubmit = async (e) => {
        // when we submit we basically just grab whatever we have in
        // the state.
        e.preventDefault();

        try {
            const { password, email } = formData;
            const data = { password, email }

            const user = await login(data)
            // as soon as we get the decoded data from the creat account api call
            // (derived fromt he jwt in local storage), we can update app.js to store
            // user in state
            setUser(user)
        } catch (err) {
            setFormData({
                ...formData,
                error: 'Log in Failed - Try again!'
            })
        }
    }

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

    const disabled = !email || !password

    return (
        <div className='formm'>

            <form onSubmit={handleSubmit} autoComplete="off">
                <h1>Sign In</h1>
                <div className='info'>
                    <input className='email' placeholder='Email...' type="text" name="email" id="email" value={email} onChange={handleChange} required /> <br />
                    <input className='email' placeholder='Password' type="password" name="password" id="password" value={password} onChange={handleChange} required />
                </div>

                <div className='btn'>
                    <button className='btn-primary' type="submit" disabled={disabled}>Log In</button>
                </div>
            </form>
            {error && <p className="error-message">&nbsp;{error}</p>}

        </div>
    )
}