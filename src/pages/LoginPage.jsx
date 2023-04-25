import React from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import LoginForm from '../components/auth/LoginForm';
import { auth } from '../firebase/firebase';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions, uiActions } from '../store';

function LoginPage() {
  const dispatch = useDispatch();
  function loginUser({ email, password }) {
    dispatch(uiActions.showLoading());
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('login success');
        dispatch(
          authActions.login({
            email: user.email,
            uid: user.uid,
          }),
        );
        dispatch(uiActions.showSuccess('login successful'));
      })
      .catch((error) => {
        const errorCode = error.errorCode;
        const errorMessage = error.message;
        console.warn('login fail', errorMessage);
        dispatch(uiActions.showError('something went wrong'));
      });
  }
  return (
    <div style={{ width: '30%', margin: '0 auto' }}>
      <LoginForm onLogin={loginUser} />
      <Link
        className="block text-primary font-big-shoulders-stencil-display text-xl font-bold mt-10 text-center border-2 border-gray-300 rounded-md py-1 px-5 hover:bg-white hover:scale-105 transition duration-500 ease-in-out"
        to={'/register'}
      >
        Do not have a login? Register here!
      </Link>
    </div>
  );
}

export default LoginPage;
