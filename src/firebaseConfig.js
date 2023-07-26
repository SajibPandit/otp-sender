import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDudh-Hj36ttIKTrM0wDBCiTf_yJWV1Ut4",
  authDomain: "otp-sender-with-esp32.firebaseapp.com",
  databaseURL: "https://otp-sender-with-esp32-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "otp-sender-with-esp32",
  storageBucket: "otp-sender-with-esp32.appspot.com",
  messagingSenderId: "573831815060",
  appId: "1:573831815060:web:7fc24ef74d1d66800bb981",
  measurementId: "G-T5DXYVN7KP"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
