/* eslint-disable react/prop-types */
import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../../firebase.config";
import { toast } from "react-toastify";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [User, setUser] = useState(null);
    const [loader,setLoader]=useState(true)
    const [reload,SetReload]=useState(false)




    //  register
    const register = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    // Login
    function login(email, password) {
     return signInWithEmailAndPassword(auth, email, password)
    }

    // google
    const googleProvider = new GoogleAuthProvider();
    const Google = () => {
     return signInWithPopup(auth, googleProvider)
            
    }

    // github
    const GithubProvider = new GithubAuthProvider();
    function Github() {
      return signInWithPopup(auth, GithubProvider)
    }

    // singOut
    const Logout=()=>{
        signOut(auth)
        .then(()=>toast.success('Logout successful'))
    }


    //  onAuthChange 
    useEffect(() => {
     const unsubscribe=onAuthStateChanged(auth, (user) => {
            setUser(user)
            setLoader(false)
        })
        return ()=>{unsubscribe()}
    }, [reload])



    return (
        <AuthContext.Provider value={{ register, login, Google, Github, User , Logout , SetReload ,loader,reload}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;