import initializeAuthentication from "../Firebase/firebase.initialize";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);

        //GotO Login Page for login redirect
        // .then(result => {
        //     setUser(result.user);
        // })
        // .catch(error => {
        //     setError(error.meassage)
        // })
        // .finally(() => {
        //     setIsLoading(false);
        // });
    }

    //Logout
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .catch(error => {
                setError(error.meassage)
            })
            .finally(() => setIsLoading(false));
    }

    //State Change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])


    // REturn from useFirebase
    return {
        user,
        signInUsingGoogle,
        logOut,
        error,
        isLoading,
        setIsLoading
    }
}

export default useFirebase;