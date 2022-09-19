import app from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBAEEnPF9n87ZNMPV0BsVHhAcRV2dov3R4",
    authDomain: "react-firebase-app-d68b7.firebaseapp.com",
    projectId: "react-firebase-app-d68b7",
    storageBucket: "react-firebase-app-d68b7.appspot.com",
    messagingSenderId: "188379705910",
    appId: "1:188379705910:web:52586462d91b30c00bde97",
    measurementId: "G-6HCC38VG7B"
  };
  
// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   };
// dev. vs prod.
// const devConfig = {
//     apiKey: process.env.REACT_APP_DEV_API_KEY,
//     authDomain: process.env.REACT_APP_DEV_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DEV_DATABASE_URL,
//     projectId: process.env.REACT_APP_DEV_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_DEV_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_DEV_MESSAGING_SENDER_ID,
//   };
  
//   const config =
//     process.env.NODE_ENV === 'production' ? prodConfig : devConfig;
  
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

class Firebase {
    constructor() {
      app.initializeApp(config);
  
      this.auth = app.auth();
    }
  // *** Auth API ***

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);

    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.SignInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
}

const analytics = getAnalytics(app);
  
export default Firebase;