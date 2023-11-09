import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase.init";
export const AuthContext = createContext(null);
import axios from "axios";
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    //Google Authentication
    const provider = new GoogleAuthProvider();
    const signUpUserWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    //Create User
    const signUpWithEmailandPassword = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Login User
    const signInUserWithEmailandPassword = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Update user
    const updateUser = (displayName, photoURL) => {
        setLoading(true)
        return updateProfile(auth.currentUser, { displayName, photoURL })
    }
    //Signout user
    const logOut = () => {
        setLoading(true)
        return signOut(auth);
    }
    //Observe user
    useEffect(() => {
        const unSubScribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            // if(currentUser){
            //     const loggdinUser = {email : currentUser.email};
            //     axios.post('https://community-food-sharing-server-ruddy.vercel.app/' ,loggdinUser, {withCredentials: true})
            //     .then(res => {
            //         console.log(res.data)
            //     })
            // }
        })
        return () => unSubScribe();
    }, [])

    const authFuncs = { signUpUserWithGoogle, signUpWithEmailandPassword, signInUserWithEmailandPassword, updateUser, logOut, user, loading};
    return (
        <AuthContext.Provider value={authFuncs}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;