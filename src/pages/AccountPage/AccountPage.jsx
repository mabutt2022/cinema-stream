import { useEffect, useState } from "react";
import TicketHistory from "../../components/AccountPage/TicketHistory";
import InfoChange from "../../components/AccountPage/InfoChange";
import ChangePassword from "../../components/AccountPage/ChangePassword";
import * as userAPI from '../../utilities/api/users.js'

export default function AccountPage({ user }) {

  const [profileData, setProfileData] = useState([]);
  const [active, setActive] = useState(null);


  useEffect(() => {
    async function getUserInfo() {
      const userInfo = await userAPI.getUserProfile(user.id);
      setProfileData(userInfo);
      // console.log(profileData.profile.address)
    }
    getUserInfo();
  }, [user.id]);

  return (
    <>
      <h1>Account Page</h1>
      <br />
      <button onClick={
        () => {
          if (active === 'password') {
            setActive(null);
            return;
          } else if (active !== 'password') {
            setActive('password');
            return;
          }
        }}>Change Password</button>
      <br />
      {active === 'password' ?
        <div>
          <ChangePassword user={user} />
          <br />
          <br />
        </div>
        :
        null
      }

      <button onClick={
        () => {
          if (active === 'info') {
            setActive(null);
            return;
          } else if (active !== 'info') {
            setActive('info');
            return;
          }
        }
      }>Personal Info Change</button>
      <br />
      {active === 'info' ?
        <div>
          <InfoChange user={user} profileData={profileData} />
          <br />
          <br />
        </div>
        :
        null}

      <button onClick={
        () => {
          if (active === 'history') {
            setActive(null);
            return;
          } else if (active !== 'history') {
            setActive('history');
            return;
          }
        }
      }>Ticket History</button>
      <br />
      {active === 'history' ?
        <div>
          <TicketHistory user={user} />
        </div>
        :
        null}

    </>
  );
}