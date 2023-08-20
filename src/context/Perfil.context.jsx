import React, { createContext, useContext, useEffect, useState } from "react";
import firebaseConfig from '../firebaseConfig';
import 'firebase/auth';
import 'firebase/database';
import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { get, getDatabase, onValue, ref, set, child, update, push } from "firebase/database";
import { GetUserInfo } from "../services/metodos";

const PerfilContext = createContext({})
PerfilContext.displayName = 'PerfilContext'

const PerfilProvider = ({ children }) => {
    const [infoUser, setInfoUser] = useState()
    const [acompanhamento, setAcompanhamento] = useState()
    const [meta, setMeta] = useState()
    const [infoAtual, setInfoAtual] = useState()
    const [imc, setImc] = useState()

    const [graficoArray, setGraficoArray] = useState()
    const [listaPesoState, setListaPesoState] = useState()
    const [listaAlturaState, setListaAlturaState] = useState()
    const [listaImcState, setListaImcState] = useState()
    const [listaDataAtualizacaoState, setDataAtualizacaoState] = useState() 
    const [objetivo, setObjetivo] = useState()

    const [afiliadoId, setAfiliadoId] = useState()

    const [primeiroAcesso, setPrimeiroAcesso] = useState()


    const [infoModalState, setInfoModalState] = useState(false)
    const [atualizaDadosModalState, setAtualizaDadosModalState] = useState(false)
    const [statusGrafico, setStatusGrafico] = useState(false)

    const today = new Date();
    const formattedDate = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
    //para verificar a data e validar que pode atualizar hoje
    const [atualizarDados, setAtualizarDados] = useState(true)
    const [volteAmanha, setVolteAmanha] = useState()
  
    //banco de dados - NAO MEXER
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const database = getDatabase(app)
    const auth = getAuth(app);

    //Id do usuario
    const userId = localStorage.getItem('@UserId:Nutrafity')


    useEffect(()=>{
        if(localStorage.getItem('@UserId:Nutrafity')){
            GetInfoUser()
        }
        
        
    }, [])

    useEffect(()=>{
        //CalcIMC(infoAtual.altura, infoAtual.kg)
        if(localStorage.getItem('@UserId:Nutrafity')){
            GetGraficoInfos()
        }
        
    }, [infoUser])


    //Consultas
    const GetInfoUser = () => {
        
        const userRef = ref(database, `users/${userId}`)
        onValue(userRef, (snapshot) => {
            const data = snapshot.val()
            setInfoUser(data)
            setAcompanhamento(data.acompanhamento)
            setMeta(data.acompanhamento.meta)
            setInfoAtual(data.acompanhamento.infoAtual)
            setAfiliadoId(data.afiliadoId)
            setObjetivo(data.acompanhamento.infoAtual.objetivo)
            setPrimeiroAcesso(data.primeiroAcesso)
        })
    }

    const CalcIMC = (altura, peso) => {
        //imc = peso / (altura * altura)
        const imc = (peso / ((altura)**2)).toFixed(2)
        setImc(imc)
    }

    const GetGraficoInfos = () => {
        let listaAuxiliar = []
        let listaCategoria = []
        let listaPeso = []
        let listaAltura = []
        let listaIMC = []

        const userRef = ref(database, `users/${userId}`)
        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            if (data.acompanhamento.infos) {
              setStatusGrafico(true);
          
              const sortedInfos = Object.values(data.acompanhamento.infos).sort((a, b) => {
                return new Date(a.dataAtualizacao) - new Date(b.dataAtualizacao);
              });
          
              sortedInfos.forEach((value) => {
                //console.log(value);
                listaAuxiliar.push(value);
                listaCategoria.push(value.dataAtualizacao);
                listaPeso.push(value.kg);
                listaAltura.push(value.altura);
                listaIMC.push(value.IMC);
              });
            } else {
              setStatusGrafico(false);
            }
          });
          
        setGraficoArray(listaAuxiliar) 
        setDataAtualizacaoState(listaCategoria)
        setListaAlturaState(listaAltura)
        setListaPesoState(listaPeso)
        setListaImcState(listaIMC)
    }


    //update de dados
        //- set novos dados no info atual
        //- push novos dados no infos

    const UpdateInfo = (infos) => {
        
        const infoAtualRef = ref(database, `users/${userId}/acompanhamento/infoAtual`)
        const infosRef = ref(database, `users/${userId}/acompanhamento/infos`)
        const primeiroAcessoRef = ref(database, `users/${userId}`)

        const newInfoAtual = {
            IMC: infos.IMC,
            altura: infos.altura,
            dataAtualizacao: formattedDate,
            idade: infos.idade,
            intolerancia: infos.intolerancia,
            kg: infos.kg,
            objetivo: infos.objetivo

        }

        const newInfos = {
            IMC: infos.IMC,
            altura: infos.altura,
            dataAtualizacao: formattedDate,
            kg: infos.kg
        }

        
        //atualiza os dados atuais
        update(infoAtualRef, newInfoAtual)
        .then(()=>{
            console.log('Dados atualizados com sucesso.')
        }).catch((err) => {
            console.log('Erro ao atualizar os dados: ', err)
        })

        update(primeiroAcessoRef, {primeiroAcesso: false})
        .then(()=>{
            console.log('Primeiro acesso com dados preenchidos.')
        }).catch((err)=>{
            console.log(err)
        })


        //adiciona os dados atuais na lista de infos
        push(infosRef, newInfos)
        .then(()=>{
            console.log('Dados adicionados as informaçoes')
        }).catch((err)=>{
            console.log('Erro ao adicionar os dados: ', err)
        })
    
    }



    const SalvarDieta = (urlDieta) => {
        const userRef = ref(database, `users/${userId}/minhasDietas`)
        
        push(userRef, urlDieta)
    }
    

    
 


    return (
        <PerfilContext.Provider value={{ 
            infoUser,
            meta,
            acompanhamento,
            infoAtual,
            setInfoModalState,
            infoModalState,
            graficoArray,
            listaPesoState,
            listaAlturaState,
            listaDataAtualizacaoState,
            listaImcState,
            afiliadoId,
            UpdateInfo,
            setAtualizaDadosModalState,
            atualizaDadosModalState,
            UpdateInfo,
            objetivo,
            statusGrafico,
            formattedDate,
            setAtualizarDados,
            atualizarDados,
            volteAmanha, 
            setVolteAmanha,
            primeiroAcesso,
            SalvarDieta
        }}>
            {children}
        </PerfilContext.Provider>
    )
}


export const usePerfil = () => {
    const context = useContext(PerfilContext)

    if(!context) {
        throw new Error("Erro ao usar o useDieta")
    }

    return context;
}

export {PerfilContext, PerfilProvider}

