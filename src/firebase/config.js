import Firebase  from "firebase";
import 'firebase/auth';
import 'firebase/firebase';
import 'firebase/storage'
// import 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyCyxEbnuOWXNREnNSyQ4zjU5xmXHKBaH6o",
    authDomain: "fir-7dfc3.firebaseapp.com",
    projectId: "fir-7dfc3",
    storageBucket: "fir-7dfc3.appspot.com",
    messagingSenderId: "582885675271",
    appId: "1:582885675271:web:fee7fce7f49da989fd35a2",
    measurementId: "G-2F4F2JNNQJ"
  };

 export default Firebase.initializeApp(firebaseConfig)
