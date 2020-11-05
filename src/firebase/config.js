import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAx9JR7otUW-JvckN7Gsl9bivgXhazZpqQ",
    authDomain: "security-auth-1ffeb.firebaseapp.com",
    databaseURL: "https://security-auth-1ffeb.firebaseio.com",
    projectId: "security-auth-1ffeb",
    storageBucket: "security-auth-1ffeb.appspot.com",
    messagingSenderId: "47526981904",
    appId: "1:47526981904:web:17b279284af5bf5645f595",
    measurementId: "G-LFLE3J5KJE"
};

// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);

export default fire;
 