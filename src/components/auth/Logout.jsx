import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, uiActions } from '../../store';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const isUser = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function logoutFirebase() {
    signOut(auth)
      .then(() => {
        dispatch(authActions.logout());
        dispatch(uiActions.showSuccess('logged out'));
        navigate('/');
      })
      .catch((error) => {});
  }

  return !isUser ? null : <button onClick={logoutFirebase}>LOGOUT</button>;
}

export default Logout;
