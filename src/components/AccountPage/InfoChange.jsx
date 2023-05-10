import { useEffect, useState } from 'react';
import * as userAPI from '../../utilities/api/users.js'

export default function InfoChange({ user, profileData }) {
  const [info, setInfo] = useState([]);
  const { name, address, phone, nickname, email } = profileData;


  async function handleChange(evt) {
    const newData = { ...info, [evt.target.name]: evt.target.value };
    setInfo(newData);

  }


  async function handleSubmit(evt) {
    evt.preventDefault();
    const updatedUser = await userAPI.updateUserInfo(info);
    setInfo(updatedUser);
    window.location.reload();
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='col-auto'>
          <label className='label-account form-label' htmlFor="name">Name</label>
          <br />
          <input type="text" id="name" name="name" placeholder={name} onChange={handleChange} />
        </div>
        <br />
        <div className='col-auto'>
          <label className='label-account form-label' htmlFor="address">Address</label>
          <br />
          <input type="text" id="address" name="address" placeholder={address} onChange={handleChange} />
        </div>
        <br />
        <div className='col-auto'>
          <label className='label-account form-label' htmlFor="phone">Phone</label>
          <br />
          <input type="text" id="phone" name="phone" placeholder={phone} onChange={handleChange} />
        </div>
        <br />
        <div className='col-auto'>
          <label className='label-account form-label' htmlFor="nickname">Nickname</label>
          <br />
          <input type="text" id="nickname" name="nickname" placeholder={nickname} onChange={handleChange} />
        </div>
        <br />
        <div className='col-auto'>
          <label className='label-account form-label' htmlFor="email">Email</label>
          <br />
          <input type="text" id="email" name="email" placeholder={email} readOnly />
        </div>
        <br />
        <input className="btn btn-primary mb-3" type="submit" value="Submit"></input>
      </form>
    </>
  );
}