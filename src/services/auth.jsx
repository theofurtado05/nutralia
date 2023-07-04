import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";
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




export const Login = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        const userId = userCredential.user.uid;
        const userEmail = userCredential.user.email;

        localStorage.setItem('@UserNutralia', user);
        localStorage.setItem('@UserIdNutralia', userId);
        localStorage.setItem('@EmailNutralia', userEmail);

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
        })
        .catch((error) => {
            // An error happened.
        });
}

export const Register = async (email, password, celular) => {
    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)

        const user = userCredential.user
        set(ref(database, 'users/' + user.uid), {
                email: email,
                celular: celular,
                tickets: 0,
                compras: 0,
                kg: 0,
                altura: 0,
                objetivo: "",
                intolerancia: ""
        })

        console.log('Usuario registrado com sucesso!')
        localStorage.setItem('@UserNutrafity', user)
        localStorage.setItem('@UserIdNutrafity', user.id)
        localStorage.setItem('@EmailNutra', email)
        
        window.location.href = "../Menu"
    }catch(error){
        return error
    }
            
}

export const RecuperarSenha = (email) => {

}