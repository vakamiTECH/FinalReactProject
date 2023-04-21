import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginForm from '../components/auth/LoginForm';
import { auth } from '../firebase/firebase';

function LoginPage() {
  function loginUser({ email, password }) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('login success');
      })
      .catch((error) => {
        const errorCode = error.errorCode;
        const errorMessage = error.message;
        console.warn('login fail', errorMessage);
      });
  }
  return (
    <div>
      <h1>LoginPage</h1>
      <p>This is LoginPage</p>
      <LoginForm onLogin={loginUser} />
    </div>
  );
}

export default LoginPage;
