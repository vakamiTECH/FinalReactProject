import { configureStore, createSlice } from '@reduxjs/toolkit';

const localUserKey = 'FIREBASE_USER';

const storageUserData = localStorage.getItem(localUserKey);

const initAuthState = {
  userEmail: storageUserData ? JSON.parse(storageUserData).email : null,
  userUid: storageUserData ? JSON.parse(storageUserData).uid : null,
  isLoggedIn: storageUserData ? true : false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initAuthState,
  reducers: {
    login(state, action) {
      console.log('login happened');
      state.userEmail = action.payload.email;
      state.userUid = action.payload.uid;
      state.isLoggedIn = true;
      localStorage.setItem(
        localUserKey,
        JSON.stringify({ email: state.userEmail, uid: state.userUid }),
      );
    },
    register(state, action) {
      console.log('register happened');
      state.userEmail = action.payload.email;
      state.userUid = action.payload.uid;
      state.isLoggedIn = true;
      localStorage.setItem(
        localUserKey,
        JSON.stringify({ email: state.userEmail, uid: state.userUid }),
      );
    },
    logout(state) {
      (state.userEmail = null),
        (state.userUid = null),
        (state.isLoggedIn = false),
        localStorage.removeItem(localUserKey);
    },
  },
});

const initUiState = {
  msg: '',
  type: '',
  show: false,
  isLoggedIn: false,
};
// initUiState = {
//   msg: 'tikrinam ar veikia',
//   type: 'success',
//   show: true,
//   isLoggedIn: false,
// };

const uiSlice = createSlice({
  name: 'ui',
  initialState: initUiState,
  reducers: {
    showFeedback(state, action) {
      (state.msg = action.payload.msg),
        (state.type = action.payload.type),
        (state.show = true);
    },
    showSuccess(state, action) {
      state.show = true;
      state.type = 'success';
      state.msg = action.payload;
    },
    closeAlert(state) {
      state.msg = '';
      state.type = '';
      state.show = false;
    },
    showLoading(state) {
      state.show = true;
      state.type = 'success';
      state.msg = 'Loading...';
    },
  },
});

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
  },
});

export const authActions = authSlice.actions;
export const uiActions = uiSlice.actions;

export default store;
