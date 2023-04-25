import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import RegisterForm from '../components/auth/RegisterForm';

function RegisterPage() {
  const [isRegistered, setIsRegistered] = React.useState(false);

  function registerInFirebase({ email, password }) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsRegistered(true);
      })
      .catch((error) => {
        console.warn(error.message);
      });
  }

  if (isRegistered) {
    return <Navigate to="/login" />;
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
