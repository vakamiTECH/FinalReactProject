import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions, uiActions } from '../../store';
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

function Logout() {
  const isUser = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();

  function logoutFirebase() {
    signOut(auth)
      .then(() => {
        dispatch(authActions.logout());
        dispatch(uiActions.showSuccess('logged out'));
      })
      .catch((error) => {});
  }
  return !isUser ? null : <button onClick={logoutFirebase}>LOGOUT</button>;
}

export default Logout;
