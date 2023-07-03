// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

/**
 * you can also use .env file for this.
 * using .env is a good idea.
 * but i will not use in this video.
 */
const firebaseConfig = {
  apiKey: "AIzaSyCsC_MpkU9YGYvsrMQqlBkHJQ1hoskrdoc",
  authDomain: "lazycoder-80655.firebaseapp.com",
  projectId: "lazycoder-80655",
  storageBucket: "lazycoder-80655.appspot.com",
  messagingSenderId: "152181705525",
  appId: "1:152181705525:web:797bcacc942c9eaee19a7c",
  measurementId: "G-MDSVCXHW5E",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app); this is for analytics which we are notusing in this video.
