import { useState } from 'react';
import * as changePassword from '../../utilities/api/users.js'

export default function ChangePassword({ user }) {
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  async function onChangePassword(evt) {
    const newData = {...password, [evt.target.name]: evt.target.value};
    setPassword(newData);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const updatedPassword = await changePassword.changePassword(password);
    setPassword({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  evt.target.reset();
  }
  
  const disable = password.oldPassword === '' || password.newPassword === '' || password.confirmPassword === '' || password.newPassword !== password.confirmPassword;

    return (
      <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="oldPassword">Old Password</label>
        <input type="password" id="oldPassword" name="oldPassword" placeholder={password.oldPassword} onChange={onChangePassword}/>
        <br />
        <label htmlFor="newPassword">New Password</label>
        <input type="password" id="newPassword" name="newPassword" onChange={onChangePassword}/>
        <br />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input type="password" id="confirmPassword" name="confirmPassword" onChange={onChangePassword}/>
        <br />
        <input type="submit" value="Submit" disabled={disable}></input>
      </form>
      </>
    );
  }