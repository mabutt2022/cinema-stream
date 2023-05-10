import { useEffect, useState } from "react";
import TicketHistory from "../../components/AccountPage/TicketHistory";
import InfoChange from "../../components/AccountPage/InfoChange";
import ChangePassword from "../../components/AccountPage/ChangePassword";
import * as userAPI from '../../utilities/api/users.js'
import './AccountPage.css'

export default function AccountPage({ user }) {

  const [profileData, setProfileData] = useState([]);

  useEffect(() => {
    async function getUserInfo() {
      const userInfo = await userAPI.getUserProfile(user.id);
      setProfileData(userInfo);
      // console.log(profileData.profile.address)
    }
    getUserInfo();
  }, [user.id]);

  return (
    <section>
      <div className="container">
        <div className="row">
          <h2 className="section-title text-center text-colored">Account Management</h2>
        </div>
        <div className="row pt-5">
          <aside className="col-md-2">
            <nav className="nav nav-pills flex-column nav-service">
              <button type="button" data-bs-toggle='tab' data-bs-target="#info" className="text-start nav-link text-colored nav-service-item active">
                Personal Info
              </button>
              <button type="button" data-bs-toggle="tab" data-bs-target="#password" className="text-start nav-link text-colored nav-service-item">
                Change Password
              </button>
              <button type="button" data-bs-toggle="tab" data-bs-target="#history" className="text-start nav-link text-colored nav-service-item">
                Purchase History
              </button>
            </nav>
          </aside>
          <div className="col-md-10">
            <div className="tab-content">
              <div className="tab-pane active" id="info">
                <div className="row">
                  <div className="col-md-5">
                    <InfoChange user={user} profileData={profileData} />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="password">
                <div className="row">
                  <div className="col-md-5">
                    <ChangePassword user={user} />
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="history">
                <div className="row">
                  <div className="col-md-5">
                    <TicketHistory user={user} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
}