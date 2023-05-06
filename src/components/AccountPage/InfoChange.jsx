import { useEffect, useState } from 'react';
import * as userAPI from '../../utilities/api/users.js'

export default function InfoChange({ user, profileData }) {
  const [info, setInfo] = useState([]);
  const { name, address, phone, nickname, email } = profileData;


  async function handleChange(evt) {
    const newData = {...info, [evt.target.name]: evt.target.value};
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

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder={name} onChange={handleChange}/>
        <br />
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" placeholder={address} onChange={handleChange}/>
        <br />
        <label htmlFor="phone">Phone</label>
        <input type="text" id="phone" name="phone" placeholder={phone} onChange={handleChange}/>
        <br />
        <label htmlFor="nickname">Nickname</label>
        <input type="text" id="nickname" name="nickname" placeholder={nickname} onChange={handleChange}/>
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" name="email" placeholder={email} readOnly/>
        <br />
        <input type="submit" value="Submit"></input>
      </form>
    </>
  );
}