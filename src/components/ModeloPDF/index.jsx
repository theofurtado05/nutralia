import React, {useState, useEffect} from "react";
import { Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

//--Primary-color: #1C9E22;
// --Secondary-color: #0a730f;
// --Icon-Background: #8ee892b0;
// --Card-PrimaryBackground: #1c9e22d7;
// Font.register({
//     family: 'Oswald',
//     src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
//   });
//....

const styles = StyleSheet.create({
    refeicaoText: {
      padding: '5px 20px',
      fontSize: 16
    },
    page: {
        flexDirection: 'column',
        backgroundColor: '#f5f5f5',
        position: 'relative',
        maxWidth: '100%',
        height: 'auto',
        flexWrap: 'wrap', // Adiciona a propriedade flexWrap
        marginBottom: 20,  // Adiciona uma margem inferior de 20px
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
        itemValor: {
            marginTop: '0px'
        }
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
        opacity: 0.3,
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
        opacity: 0.6
        
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
        color: '#0a730f',
        fontWeight: 700,
        fontSize: '26px',
        textAlign: 'center',
        width: 300,
        borderRadius: 50,
        textTransform: 'uppercase',
        
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


const ModeloPDf = ({dieta, objInfosPessoais, treino}) => {
    
    return ( 
        <Document>
        <Page size={[595.28, 841.89]} style={styles.page} pageNumber={1}>
          <View style={styles.tituloSection}>
            <Text style={styles.titulo}>Plano Alimentar</Text> 
          </View>

          <View style={styles.infoPessoaisSection}>
            <Text style={styles.infoPessoaisTitulo}>
                Informações Pessoais
            </Text>
            <Text style={styles.infoPessoaisInfos}>
                <Text style={styles.texto.bold}>Altura: </Text>
                {objInfosPessoais["altura"]}m 
            </Text>
            <Text style={styles.infoPessoaisInfos}>
                <Text style={styles.texto.bold}>Peso: </Text>
                {objInfosPessoais.kg}kg 
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

          </View>
            <Text style={styles.texto.aviso}>PLANO ALIMENTAR FEITO SOB MEDIDA. NÃO COMPARTILHE, RISCO DE INFECÇÃO.</Text>
            <Image 
            style={styles.logoPrincipal}
            src="https://firebasestorage.googleapis.com/v0/b/nutrafity.appspot.com/o/imagens%2FlogoTemplate.png?alt=media&token=db62a7ab-1cac-4813-8ea7-b808110b851a"
            />  
        </Page>

        {dieta.map((dia, index) => {

          return (
              <Page size="A4" style={styles.page} pageNumber={index + 1}>
                <View style={{
                  margin: 10,
                  padding: 10,
                  flexGrow: 1
                }}>
                  <Text style={{color: "#0a730f", fontWeight: 'bold', fontSize: 24}}>
                    Dia {index + 1}
                  </Text>

                  <View style={{padding: '10px 0'}}>
                    <Text style={{fontSize: 20}}>
                      Cafe da manhã
                    </Text>
                    {dia.cafeDaManha.map((refeicao, index) => {
                      return (
                        <Text style={styles.refeicaoText}>
                          Opção {index + 1}: {refeicao}
                        </Text>
                        )
                      })}
                  </View>

                  <View style={{padding: '10px 0'}}>
                    <Text style={{fontSize: 20}}>
                      Almoço
                    </Text>
                    {dia.almoco.map((refeicao, index) => {
                      return (
                        <Text style={styles.refeicaoText}>
                          Opção {index + 1}: {refeicao}
                        </Text>
                        )
                      })}
                  </View>

                  

                  <View style={{padding: '10px 0'}}>
                    <Text style={{fontSize: 20}}>
                      Lanche da Tarde
                    </Text>
                    {dia.lancheDaTarde.map((refeicao, index) => {
                      return (
                        <Text style={styles.refeicaoText}>
                          Opção {index + 1}: {refeicao}
                        </Text>
                        )
                      })}
                  </View>

                  <View style={{padding: '10px 0'}}>
                    <Text style={{fontSize: 20}}>
                      Janta
                    </Text>
                    {dia.janta.map((refeicao, index) => {
                      return (
                        <Text style={styles.refeicaoText}>
                          Opção {index + 1}: {refeicao}
                        </Text>
                        )
                      })}
                  </View>

                </View>
                <Image 
                  style={styles.logoPrincipal}
                  src="https://firebasestorage.googleapis.com/v0/b/nutrafity.appspot.com/o/imagens%2FlogoTemplate.png?alt=media&token=db62a7ab-1cac-4813-8ea7-b808110b851a"
                />  
              </Page>
          )
          
        })}

        {treino && 
          <Page size="A4" style={styles.page}>
              <View style={{
                margin: 10,
                padding: 10,
                flexGrow: 1
              }}>
                <Text style={{color: "#0a730f", fontWeight: 'bold', fontSize: 24}}>
                    Treino A
                </Text>
                {treino.opcoesA.map((a) => {
                  return (
                    <Text style={styles.refeicaoText}>
                      - {a}
                    </Text>
                  )
                })}

                <Text style={{color: "#0a730f", fontWeight: 'bold', fontSize: 24, paddingTop: 10}}>
                    Treino B
                </Text>
                {treino.opcoesB.map((b) => {
                  return (
                    <Text style={styles.refeicaoText}>
                      - {b}
                    </Text>
                  )
                })}
            </View>
            
                <Image 
                  style={styles.logoPrincipal}
                  src="https://firebasestorage.googleapis.com/v0/b/nutrafity.appspot.com/o/imagens%2FlogoTemplate.png?alt=media&token=db62a7ab-1cac-4813-8ea7-b808110b851a"
                />  
          </Page>
        }
        
        {/* <Page size="A4" style={styles.page} pageNumber={2}>
            <View style={{
                    margin: 10,
                    padding: 10,
                    flexGrow: 1
                }}>
        
                <Text style={{padding: 20}}>{dieta}</Text>
            </View>
            <Image 
                style={styles.logoCanto}
                src="https://api-nutrafity.vercel.app/imagem/logoTemplate.png"
            />  
        </Page> */}
        
      </Document>
    )
}

export default ModeloPDf