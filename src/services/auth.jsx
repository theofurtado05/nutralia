import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import firebaseConfig from '../firebaseConfig';
import 'firebase/auth';
import 'firebase/database';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app)

const auth = getAuth(app);

export const VerifLogin = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
          
          const uid = user.uid;

          if(window.location.pathname == '/' || window.location.pathname == '/Registro'){
            window.location.href = './Menu'
          }
          
        } else {
            if(window.location.pathname != '/' ){
                window.location.href = '../'
            }
        }
      });
}


export const verifLogadoAuth = () => {
    if(localStorage.getItem('@UserIdNutrafity') && localStorage.getItem('@UserIdNutrafity') != '' && localStorage.getItem('@UserIdNutrafity') != null && localStorage.getItem('@UserIdNutrafity') != undefined){
        window.location.href = './menu'
    }
}

export const verifLogadoInside = () => {
    if(!localStorage.getItem('@UserIdNutrafity') || localStorage.getItem('@UserIdNutrafity') == ''){
        window.location.href = '../'
    }
}



export const Login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
    
        const user = userCredential.user;
        const userId = userCredential.user.uid;
        const userEmail = userCredential.user.email;

        localStorage.setItem('@User:Nutrafity', user);
        localStorage.setItem('@UserId:Nutrafity', userId);
        localStorage.setItem('@Email:Nutrafity', userEmail);

        window.location.href = "../Menu";

        return "Success!";
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw errorCode;
    }
};

export const SignOut = () => {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
            localStorage.removeItem('@Email:Nutrafity')
            localStorage.removeItem('@User:Nutrafity')
            localStorage.removeItem('@UserId:Nutrafity')
            localStorage.deleteItem('@Email:Nutrafity')
            localStorage.deleteItem('@User:Nutrafity')
            localStorage.deleteItem('@UserId:Nutrafity')
            window.location.href = '../'


        })
        .catch((error) => {
            // An error happened.
            console.log(error)
        });
}

export const Register = async (email, password, celular) => {
        
}

export const RecuperarSenha = (email) => {

}