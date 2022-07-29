import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAQnlv9ddqbWeBZ8rRWF93gC8F-S7AfYxI",
    authDomain: "whatsapp-clone-5e3d2.firebaseapp.com",
    projectId: "whatsapp-clone-5e3d2",
    storageBucket: "whatsapp-clone-5e3d2.appspot.com",
    messagingSenderId: "867171874878",
    appId: "1:867171874878:web:3b1d7683eec09ed1d7396f",
    measurementId: "G-SK69CC55FF"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth , provider , db };
export default db;
