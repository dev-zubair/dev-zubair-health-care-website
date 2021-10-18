import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuthentication from "../Firebase/Firebase.init.js";


initializationAuthentication();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const auth = getAuth();

    const signInWithGoogle = () => {
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(user);
            })
    }

    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        })
    }, [])

    return {
        user,
        signInWithGoogle,
        logOut
    }
}


export default useFirebase;