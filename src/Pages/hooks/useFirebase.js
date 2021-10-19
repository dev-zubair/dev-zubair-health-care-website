import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuthentication from "../Firebase/Firebase.init.js";


initializationAuthentication();

// Providers 
const googleProvider = new GoogleAuthProvider();
// const gitHubProvider = new GithubAuthProvider();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const auth = getAuth();

    // Email Sign In
    const signInWithEmail = () => {
        alert('sign is successfully')
        return signInWithEmailAndPassword(auth, email, password)
    }
    console.log(user);
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
            .catch((error) => {
                setError(error.message);
            })
    }




    // user signed in
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


    // Sign up with Mail and password
    function signUp(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                alert("user's have been created")
            })
            .catch(error => {
                setError(error.message);
            })
    }


    // Get Email
    function getEmail(e) {
        setEmail(e?.target?.value)
    }
    // Get Password
    function getPassword(e) {
        setPassword(e?.target?.value)
    }


    return {
        signInWithEmail,
        // signInWithGitHub,
        user,
        signInWithGoogle,
        logOut,
        error,
        getPassword,
        getEmail,
        signUp,
        setUser,
        setError
    }
}


export default useFirebase;