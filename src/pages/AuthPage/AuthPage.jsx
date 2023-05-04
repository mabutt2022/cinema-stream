// Compoenents
import { useState } from 'react';
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage({ setUser }) {
  const [existingUser, setExistingUser] = useState(false);
  const [buttonText, setButtonText] = useState("Don't Have a Login");

  async function checkingLogin() {
    setExistingUser(!existingUser);
    setButtonText(existingUser ? "Don't Have a Login" : "Already Have a Login")
  }
  return (
    <section>
      <div>
        <button onClick={checkingLogin}>{buttonText}</button>
      {existingUser ?
      <SignUpForm setUser={setUser}/>
        :
      <LoginForm setUser={setUser}/>
    }
      </div>
    </section>
  );
}