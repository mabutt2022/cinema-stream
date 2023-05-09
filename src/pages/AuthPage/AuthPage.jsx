// Compoenents
import { useState } from 'react';
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";
import "./AuthPage.css";
import logoImage from '../../assets/images/logo.png'



export default function AuthPage({ setUser }) {
  const [existingUser, setExistingUser] = useState(false);
  const [buttonText, setButtonText] = useState("Don't Have a Login");

  async function checkingLogin() {
    setExistingUser(!existingUser);
    setButtonText(existingUser ? "Sign up now" : "Login Now")
  }
  return (
    <header className="showcase">
      <div className='logo'>
      <img src={logoImage} alt="Cinema Stream"></img>
      </div>
      <div className='showcase-content'>
        {existingUser ?
          <SignUpForm setUser={setUser} />
          :
          <LoginForm setUser={setUser} />
        }
        <div className="signup">
          {existingUser ? <p>Got your Login ?</p> : <p>New to Cinema Stream ?</p>}
          <button className='transparent' onClick={checkingLogin}>{buttonText}</button>
        </div>
      </div>
    </header>
  );
}