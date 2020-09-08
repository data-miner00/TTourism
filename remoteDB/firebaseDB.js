  
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCK2oD8fNMPKftmyUGZ7ANNGFFiXoZVKL0",
    authDomain: "uecs3253ttourism.firebaseapp.com",
    databaseURL: "https://uecs3253ttourism.firebaseio.com",
    projectId: "uecs3253ttourism",
    storageBucket: "uecs3253ttourism.appspot.com",
    messagingSenderId: "106177145667",
    appId: "1:106177145667:web:719d20dd0f2d203e841df6",
    measurementId: "G-87DZEYZ3XS"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore();

export default firebase;