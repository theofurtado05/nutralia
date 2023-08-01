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

export const VerifLogin = async () => {
    if(window.location.pathname != '/Registro'){
        await onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const uid = user.uid;
    
              if(window.location.pathname == '/'){
                window.location.href = './Menu'
              }
              
            } else {
                if(window.location.pathname != '/' ){
                    window.location.href = '../'
                }
            }
          });

    }
    
}


export const verifLogadoAuth = () => {
    if(localStorage.getItem('@UserId:Nutrafity') && localStorage.getItem('@UserId:Nutrafity') != '' && localStorage.getItem('@UserId:Nutrafity') != null && localStorage.getItem('@UserId:Nutrafity') != undefined){
        window.location.href = './menu'
    }
}

export const verifLogadoInside = () => {
    if(!localStorage.getItem('@UserId:Nutrafity') || localStorage.getItem('@UserId:Nutrafity') == ''){
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
        localStorage.setItem('@AfiliadoId:Nutrafity', user.afiliadoId)

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