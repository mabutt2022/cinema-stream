import { useState } from 'react';
import * as changePassword from '../../utilities/api/users.js'
import '../../pages/AccountPage/AccountPage.css'

export default function ChangePassword({ user }) {
  const [password, setPassword] = useState({
    oldPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  async function onChangePassword(evt) {
    const newData = { ...password, [evt.target.name]: evt.target.value };
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
        <div className='mb-3'>
          <input className='form-control pass' placeholder='Old Password' type="password" id="oldPassword" name="oldPassword" value={password.oldPassword} onChange={onChangePassword} />
        </div>
        <div className='mb-3'>
          <input className='form-control pass' placeholder='New Password' type="password" id="newPassword" name="newPassword" value={password.newPassword} onChange={onChangePassword} />
        </div>
        <div className='mb-3'>
          <input className='form-control pass' placeholder='Confirm Password' type="password" id="confirmPassword" name="confirmPassword" value={password.confirmPassword} onChange={onChangePassword} />
        </div>
        <input className="btn btn-primary mb-3 pass-btn" type="submit" value="Submit" disabled={disable}></input>
      </form>
    </>
  );
}