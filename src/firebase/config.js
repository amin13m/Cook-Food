import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBoCY1efrwqv2DjgRpZcbBCNsI4ljPwlyE",
    authDomain: "cook-food-417c4.firebaseapp.com",
    projectId: "cook-food-417c4",
    storageBucket: "cook-food-417c4.appspot.com",
    messagingSenderId: "1086694743507",
    appId: "1:1086694743507:web:0904d1da551a5713a26326"
  };


initializeApp(firebaseConfig)

const db= getFirestore()

export {db}