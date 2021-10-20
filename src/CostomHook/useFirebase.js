import { initializeApp } from "@firebase/app"
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import FirebaseInitializeAuth from "../FirebaseManger/Firebase.Init";



FirebaseInitializeAuth()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }


    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }



    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)

            }
        })
    }, [])


    return {
        user,
        error,
        logout,
        googleSignIn,

    }
}


export default useFirebase