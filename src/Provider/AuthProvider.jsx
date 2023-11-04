import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import auth from "../firebase.init";
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    //Google Authentication
    const provider = new GoogleAuthProvider();

    const signUpUserWithGoogle = ()=>{
        return signInWithPopup(auth, provider)
    }
    const [user, setUser] = useState();
    //Create User
    const signUpWithEmailandPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Login User
    const signInUserWithEmailandPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    //Update user
    const updateUser = (displayName, photoURL)=>{
        return updateProfile(auth.currentUser, {displayName, photoURL})
    }
    //Signout user
    const logOut = () =>{
        return signOut(auth);
    }
    //Observe user
    useEffect(() => {
        const unSubScribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => unSubScribe();
    }, [])

    const authFuncs = {signUpUserWithGoogle, signUpWithEmailandPassword, signInUserWithEmailandPassword,updateUser, logOut , user };
    return (
        <AuthContext.Provider value={authFuncs}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;