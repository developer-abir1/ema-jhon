import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';


const FirebaseInitializeAuth = () => {
    initializeApp(firebaseConfig)
}

export default FirebaseInitializeAuth;