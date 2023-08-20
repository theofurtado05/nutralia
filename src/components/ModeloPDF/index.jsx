import React, {useState, useEffect} from "react";
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

//--Primary-color: #1C9E22;
// --Secondary-color: #0a730f;
// --Icon-Background: #8ee892b0;
// --Card-PrimaryBackground: #1c9e22d7;


const styles = StyleSheet.create({
    page: {
      flexDirection: 'column',
      backgroundColor: '#f5f5f5',
      position: 'relative'
      
    },
    texto: {
        bold: {
            fontWeight: 'bold'
        },
        aviso: {
            textAlign: 'center',
            color: '#000',
            fontSize: '22px',
            display: 'flex',
            alignSelf: 'center',
            position: 'absolute',
            bottom: 80,
            width: '85%',
            fontWeight: 'bold'
        },  
        tituloDia: {
            color: '#0a730f',
            fontSize: '26px',
            padding: '40px 0 10px 40px',
            textDecoration: 'underline'

        },
        tituloPeriodo: {
            color: '#0a730f',
            fontSize: '20px',
        },
        itemLista: {

        },
    },  
    sessoes: {
        periodo: {
            padding: '30px 0 10px 40px'
        },
        items: {
            padding: '20px 0 5px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px'
        },
    },
    logoPrincipal: {
        width: 300,
        height: 300,
        alignSelf: 'center',
        margin: 20,
        opacity: 0.4,
        position: 'absolute',
        top: 350,
    },
    logoCanto: {
        width: 120,
        height: 120,
        alignSelf: 'center',
        opacity: 1,
        position: 'absolute',
        bottom: 5,
        right: 5,
        
    },
    tituloSection: {
      margin: 10,
      padding: 3,
      marginTop: 30,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start'
    },
    titulo: {
        color: '#FFF',
        fontWeight: 700,
        fontSize: '26px',
        textAlign: 'center',
        backgroundColor: '#1C9E22',
        width: 300,
        borderRadius: 50,
        textTransform: 'uppercase'
    },
    infoPessoaisSection: {
        padding: '30px 0px 10px 40px',
        display: 'flex',
        flexDirection: 'column',
        
      
    },
    infoPessoaisTitulo: {
        fontWeight: 1000,
        fontSize: '20px',
        color: '#0a730f',
        
        
    },
    infoPessoaisInfos: {
        padding: '10px 0 0 30px'
    }
  });


const ModeloPDf = ({arrayObjsDieta, objInfosPessoais, objMetaDiaria}) => {
    
    return ( 
        <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.tituloSection}>
            <Text style={styles.titulo}>Plano Alimentar</Text> 
             
          </View>

          <View style={styles.infoPessoaisSection}>
            <Text style={styles.infoPessoaisTitulo}>
                Informações Pessoais
            </Text>
            <Text style={styles.infoPessoaisInfos}>
                <Text style={styles.texto.bold}>Altura: </Text>
                {objInfosPessoais["altura"]} 
            </Text>
            <Text style={styles.infoPessoaisInfos}>
                <Text style={styles.texto.bold}>Peso: </Text>
                {objInfosPessoais.kg} 
            </Text>
            <Text style={styles.infoPessoaisInfos}>
                <Text style={styles.texto.bold}>Objetivo: </Text>
                {objInfosPessoais.objetivo} 
            </Text>
            <Text style={styles.infoPessoaisInfos}>
                <Text style={styles.texto.bold}>Intolerância: </Text>
                {objInfosPessoais.intolerancia}
            </Text>

          </View>

          <View style={styles.infoPessoaisSection}>
            <Text style={styles.infoPessoaisTitulo}>
                Meta Diaria
            </Text>
            <Text style={styles.infoPessoaisInfos}>
                <Text style={styles.texto.bold}>Proteína: </Text>
                {objMetaDiaria.proteina} 
            </Text>
            <Text style={styles.infoPessoaisInfos}>
                <Text style={styles.texto.bold}>Carboidrato: </Text>
                {objMetaDiaria.carboidrato} 
            </Text>
            <Text style={styles.infoPessoaisInfos}>
                <Text style={styles.texto.bold}>Lipídios: </Text>
                {objMetaDiaria.lipidio} 
            </Text>

          </View>
            <Text style={styles.texto.aviso}>PLANO ALIMENTAR FEITO SOB MEDIDA. NÃO COMPARTILHE, RISCO DE INFECÇÃO.</Text>
            <Image 
            style={styles.logoPrincipal}
            src="https://api-nutrafity.vercel.app/imagem/logoTemplate.png"
            />  
        </Page>

        {/*SEGUNDA*/}
        <Page size="A4" style={styles.page}>
            <Text style={styles.texto.tituloDia}>SEGUNDA-FEIRA</Text>
            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Manha</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[0].manha.manha1}</Text>
                        <Text>{arrayObjsDieta[0].manha.manha2}</Text>
                        <Text>{arrayObjsDieta[0].manha.manha3}</Text>
                        <Text>{arrayObjsDieta[0].manha.valorManha}</Text>
                    </View>
                    
            </View>

            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Meio Dia</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[0].meioDia.meioDia1}</Text>
                        <Text>{arrayObjsDieta[0].meioDia.meioDia2}</Text>
                        <Text>{arrayObjsDieta[0].meioDia.meioDia3}</Text>
                        <Text>{arrayObjsDieta[0].meioDia.meioDiaValor}</Text>
                    </View>
                    
            </View>
            
            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Tarde</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[0].tarde.tarde1}</Text>
                        <Text>{arrayObjsDieta[0].tarde.tarde2}</Text>
                        <Text>{arrayObjsDieta[0].tarde.tarde3}</Text>
                        <Text>{arrayObjsDieta[0].tarde.valorTarde}</Text>
                    </View>
                    
            </View>

            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Noite</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[0].noite.noite1}</Text>
                        <Text>{arrayObjsDieta[0].noite.noite2}</Text>
                        <Text>{arrayObjsDieta[0].noite.noite3}</Text>
                        <Text>{arrayObjsDieta[0].noite.noiteValor}</Text>
                    </View>
                    
            </View>

            <Image 
            style={styles.logoCanto}
            src="https://api-nutrafity.vercel.app/imagem/logoTemplate.png"
            />  

        </Page>

        {/*Terca*/}
        <Page size="A4" style={styles.page}>
            <Text style={styles.texto.tituloDia}>TERÇA-FEIRA</Text>
            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Manha</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[1].manha.manha1}</Text>
                        <Text>{arrayObjsDieta[1].manha.manha2}</Text>
                        <Text>{arrayObjsDieta[1].manha.manha3}</Text>
                        <Text>{arrayObjsDieta[1].manha.manhaValor}</Text>
                    </View>
                    
            </View>

            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Meio Dia</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[1].meioDia.meioDia1}</Text>
                        <Text>{arrayObjsDieta[1].meioDia.meioDia2}</Text>
                        <Text>{arrayObjsDieta[1].meioDia.meioDia3}</Text>
                        <Text>{arrayObjsDieta[1].meioDia.meioDiaValor}</Text>
                    </View>
                    
            </View>
            
            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Tarde</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[1].tarde.tarde1}</Text>
                        <Text>{arrayObjsDieta[1].tarde.tarde2}</Text>
                        <Text>{arrayObjsDieta[1].tarde.tarde3}</Text>
                        <Text>{arrayObjsDieta[1].tarde.tardeValor}</Text>
                    </View>
                    
            </View>

            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Noite</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[1].noite.noite1}</Text>
                        <Text>{arrayObjsDieta[1].noite.noite2}</Text>
                        <Text>{arrayObjsDieta[1].noite.noite3}</Text>
                        <Text>{arrayObjsDieta[1].noite.noiteValor}</Text>
                    </View>
                    
            </View>

            <Image 
            style={styles.logoCanto}
            src="https://api-nutrafity.vercel.app/imagem/logoTemplate.png"
            />  

        </Page>

        {/*QUARTA*/}
        <Page size="A4" style={styles.page}>
            <Text style={styles.texto.tituloDia}>QUARTA-FEIRA</Text>
            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Manha</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[2].manha.manha1}</Text>
                        <Text>{arrayObjsDieta[2].manha.manha2}</Text>
                        <Text>{arrayObjsDieta[2].manha.manha3}</Text>
                        <Text>{arrayObjsDieta[2].manha.manhaValor}</Text>
                    </View>
                    
            </View>

            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Meio Dia</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[2].meioDia.meioDia1}</Text>
                        <Text>{arrayObjsDieta[2].meioDia.meioDia2}</Text>
                        <Text>{arrayObjsDieta[2].meioDia.meioDia3}</Text>
                        <Text>{arrayObjsDieta[2].meioDia.meioDiaValor}</Text>
                    </View>
                    
            </View>
            
            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Tarde</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[2].tarde.tarde1}</Text>
                        <Text>{arrayObjsDieta[2].tarde.tarde2}</Text>
                        <Text>{arrayObjsDieta[2].tarde.tarde3}</Text>
                        <Text>{arrayObjsDieta[2].tarde.tardeValor}</Text>
                    </View>
                    
            </View>

            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Noite</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[2].noite.noite1}</Text>
                        <Text>{arrayObjsDieta[2].noite.noite2}</Text>
                        <Text>{arrayObjsDieta[2].noite.noite3}</Text>
                        <Text>{arrayObjsDieta[2].noite.noiteValor}</Text>
                    </View>
                    
            </View>

            <Image 
            style={styles.logoCanto}
            src="https://api-nutrafity.vercel.app/imagem/logoTemplate.png"
            />  

        </Page>

        {/*QUINTA*/}
        <Page size="A4" style={styles.page}>
            <Text style={styles.texto.tituloDia}>QUINTA-FEIRA</Text>
            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Manha</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[3].manha.manha1}</Text>
                        <Text>{arrayObjsDieta[3].manha.manha2}</Text>
                        <Text>{arrayObjsDieta[3].manha.manha3}</Text>
                        <Text>{arrayObjsDieta[3].manha.manhaValor}</Text>
                    </View>
                    
            </View>

            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Meio Dia</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[3].meioDia.meioDia1}</Text>
                        <Text>{arrayObjsDieta[3].meioDia.meioDia2}</Text>
                        <Text>{arrayObjsDieta[3].meioDia.meioDia3}</Text>
                        <Text>{arrayObjsDieta[3].meioDia.meioDiaValor}</Text>
                    </View>
                    
            </View>
            
            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Tarde</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[3].tarde.tarde1}</Text>
                        <Text>{arrayObjsDieta[3].tarde.tarde2}</Text>
                        <Text>{arrayObjsDieta[3].tarde.tarde3}</Text>
                        <Text>{arrayObjsDieta[3].tarde.tardeValor}</Text>
                    </View>
                    
            </View>

            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Noite</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[3].noite.noite1}</Text>
                        <Text>{arrayObjsDieta[3].noite.noite2}</Text>
                        <Text>{arrayObjsDieta[3].noite.noite3}</Text>
                        <Text>{arrayObjsDieta[3].noite.noiteValor}</Text>
                    </View>
                    
            </View>

            <Image 
            style={styles.logoCanto}
            src="https://api-nutrafity.vercel.app/imagem/logoTemplate.png"
            />  

        </Page>

        {/*SEXTA*/}
        <Page size="A4" style={styles.page}>
            <Text style={styles.texto.tituloDia}>SEXTA-FEIRA</Text>
            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Manha</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[4].manha.manha1}</Text>
                        <Text>{arrayObjsDieta[4].manha.manha2}</Text>
                        <Text>{arrayObjsDieta[4].manha.manha3}</Text>
                        <Text>{arrayObjsDieta[4].manha.manhaValor}</Text>
                    </View>
                    
            </View>

            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Meio Dia</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[4].meioDia.meioDia1}</Text>
                        <Text>{arrayObjsDieta[4].meioDia.meioDia2}</Text>
                        <Text>{arrayObjsDieta[4].meioDia.meioDia3}</Text>
                        <Text>{arrayObjsDieta[4].meioDia.meioDiaValor}</Text>
                    </View>
                    
            </View>
            
            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Tarde</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[4].tarde.tarde1}</Text>
                        <Text>{arrayObjsDieta[4].tarde.tarde2}</Text>
                        <Text>{arrayObjsDieta[4].tarde.tarde3}</Text>
                        <Text>{arrayObjsDieta[4].tarde.tardeValor}</Text>
                    </View>
                    
            </View>

            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Noite</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[4].noite.noite1}</Text>
                        <Text>{arrayObjsDieta[4].noite.noite2}</Text>
                        <Text>{arrayObjsDieta[4].noite.noite3}</Text>
                        <Text>{arrayObjsDieta[4].noite.noiteValor}</Text>
                    </View>
                    
            </View>

            <Image 
            style={styles.logoCanto}
            src="https://api-nutrafity.vercel.app/imagem/logoTemplate.png"
            />  

        </Page>


        {/*SABADO*/}
        <Page size="A4" style={styles.page}>
            <Text style={styles.texto.tituloDia}>SABADO</Text>
            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Manha</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[5].manha.manha1}</Text>
                        <Text>{arrayObjsDieta[5].manha.manha2}</Text>
                        <Text>{arrayObjsDieta[5].manha.manha3}</Text>
                        <Text>{arrayObjsDieta[5].manha.manhaValor}</Text>
                    </View>
                    
            </View>

            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Meio Dia</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[5].meioDia.meioDia1}</Text>
                        <Text>{arrayObjsDieta[5].meioDia.meioDia2}</Text>
                        <Text>{arrayObjsDieta[5].meioDia.meioDia3}</Text>
                        <Text>{arrayObjsDieta[5].meioDia.meioDiaValor}</Text>
                    </View>
                    
            </View>
            
            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Tarde</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[5].tarde.tarde1}</Text>
                        <Text>{arrayObjsDieta[5].tarde.tarde2}</Text>
                        <Text>{arrayObjsDieta[5].tarde.tarde3}</Text>
                        <Text>{arrayObjsDieta[5].tarde.tardeValor}</Text>
                    </View>
                    
            </View>

            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Noite</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[5].noite.noite1}</Text>
                        <Text>{arrayObjsDieta[5].noite.noite2}</Text>
                        <Text>{arrayObjsDieta[5].noite.noite3}</Text>
                        <Text>{arrayObjsDieta[5].noite.noiteValor}</Text>
                    </View>
                    
            </View>

            <Image 
            style={styles.logoCanto}
            src="https://api-nutrafity.vercel.app/imagem/logoTemplate.png"
            />  

        </Page>

        {/*DOMINGO*/}
        <Page size="A4" style={styles.page}>
            <Text style={styles.texto.tituloDia}>DOMINGO</Text>
            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Manha</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[6].manha.manha1}</Text>
                        <Text>{arrayObjsDieta[6].manha.manha2}</Text>
                        <Text>{arrayObjsDieta[6].manha.manha3}</Text>
                        <Text>{arrayObjsDieta[6].manha.manhaValor}</Text>
                    </View>
                    
            </View>

            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Meio Dia</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[6].meioDia.meioDia1}</Text>
                        <Text>{arrayObjsDieta[6].meioDia.meioDia2}</Text>
                        <Text>{arrayObjsDieta[6].meioDia.meioDia3}</Text>
                        <Text>{arrayObjsDieta[6].meioDia.meioDiaValor}</Text>
                    </View>
                    
            </View>
            
            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Tarde</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[6].tarde.tarde1}</Text>
                        <Text>{arrayObjsDieta[6].tarde.tarde2}</Text>
                        <Text>{arrayObjsDieta[6].tarde.tarde3}</Text>
                        <Text>{arrayObjsDieta[6].tarde.tardeValor}</Text>
                    </View>
                    
            </View>

            <View style={styles.sessoes.periodo}>
                <Text style={styles.texto.tituloPeriodo}>Noite</Text>
                    <View style={styles.sessoes.items}>
                        <Text>{arrayObjsDieta[6].noite.noite1}</Text>
                        <Text>{arrayObjsDieta[6].noite.noite2}</Text>
                        <Text>{arrayObjsDieta[6].noite.noite3}</Text>
                        <Text>{arrayObjsDieta[6].noite.noiteValor}</Text>
                    </View>
                    
            </View>

            <Image 
            style={styles.logoCanto}
            src="https://api-nutrafity.vercel.app/imagem/logoTemplate.png"
            />  

        </Page>
      </Document>
    )
}

export default ModeloPDf