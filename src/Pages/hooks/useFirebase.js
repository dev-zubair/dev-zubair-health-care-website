import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuthentication from "../Firebase/Firebase.init.js";


initializationAuthentication();

// Providers 
const googleProvider = new GoogleAuthProvider();
// const gitHubProvider = new GithubAuthProvider();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const auth = getAuth();

    // Google Sign In
    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            })
    }
    // GitHub Sign In
    // const signInWithGitHub = () => {
    //     signInWithPopup(auth, gitHubProvider)
    //         .then(result => {
    //             setUser(result.user);
    //             console.log(user);
    //         })
    //     .catch((error) => {
    //         setError(error.message);
    //     })
    // }

    // Google Sign Out
    const logOut = () => {
        signOut(auth)
            .then(() => { })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
        });
        return () => unsubscribe;
    }, [])

    return {
        // signInWithGitHub,
        user,
        signInWithGoogle,
        logOut,
        error
    }
}


export default useFirebase;