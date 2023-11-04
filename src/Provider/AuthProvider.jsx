import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.init";
export const AuthContext = createContext(null);

const signUpWithEmailandPassword = (email, password)=>{
   return createUserWithEmailAndPassword(auth, email, password)
}
const signInUserWithEmailandPassword = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password)
}
const authFuncs ={signUpWithEmailandPassword, signInUserWithEmailandPassword};

const AuthProvider = ({children}) => {
    return (
        <AuthContext.Provider value={authFuncs}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;