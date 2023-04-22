import React from 'react';
import RegisterForm from '../components/auth/RegisterForm';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

function RegisterPage() {
  function registerInFirebase({ email, password }) {
    console.log('{ email, password } ===', { email, password });
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log('user ===', user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.warn(errorMessage);
      });
  }
  return (
    <div style={{ width: '30%', margin: '0 auto' }}>
      <RegisterForm onRegister={registerInFirebase} />
      <Link
        className="block text-primary font-big-shoulders-stencil-display text-xl font-bold mt-10 text-center border-2 border-gray-300 rounded-md py-1 px-5 hover:bg-white hover:scale-105 transition duration-500 ease-in-out"
        to={'/login'}
      >
        Have a login? Click here to sign in!
      </Link>
    </div>
  );
}

export default RegisterPage;
