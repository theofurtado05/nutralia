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




export const Login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const userId = userCredential.user.uid;
            const email = userCredential.user.email;

            localStorage.setItem('@UserNutralia', user)
            localStorage.setItem('@UserIdNutralia', user.id)
            localStorage.setItem('@EmailNutralia', email)
            
            window.location.href = "../Menu"
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            return errorCode
        });
}

export const SignOut = () => {
    signOut(auth)
        .then(() => {
            // Sign-out successful.
        })
        .catch((error) => {
            // An error happened.
        });
}

export const Register = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            
            const user = userCredential.user;
            set(ref(database, 'users/' + user.uid), {
                email: email,
                tickets: 0,
                compras: 0,
                kg: 0,
                altura: 0,
                idade: 0,

            }).then(()=>{
                console.log('Usuario registrado com sucesso!')
                localStorage.setItem('@UserNutralia', user)
                localStorage.setItem('@UserIdNutralia', user.id)
                localStorage.setItem('@EmailNutralia', email)
                
                window.location.href = "../Menu"
            }).catch((err) => {
                return "Erro ao salvar as informações do usuário."
            })


        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            // switch(errorCode){
            //     case 'auth/invalid-email':
            //         return 'Email invalido.';
                    
            //     case 'auth/email-already-in-use':
            //         return 'Email em uso.'
            //         break;
            //     case 'auth/weak-password':
            //         return 'A senha deve conter no minimo 6 caracteres.'
            //         break;
            //     default:
            //         return 'Erro ao cadastrar usuário.'
            //         break;
            // }
          
            return errorCode
        });
}

export const RecuperarSenha = (email) => {

}