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


const ModeloPDf = ({dieta, objInfosPessoais}) => {

    const renderizarTexto = (texto) => {
        const partes = texto.split(/(?=\b(?:Domingo|Segunda|Terça|Quarta|Quinta|Sexta|Sábado):)/);
        
        return partes.map((parte, index) => (
          <Text key={index} style={{ marginBottom: 10 }}>
            {parte}
          </Text>
        ));
      };

      const chunk = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
          result.push(arr.slice(i, i + size));
        }
        return result;
      };
    
      const renderizarDias = (texto) => {
        const dias = texto.split(/(?=\b(?:Domingo|Segunda|Terça|Quarta|Quinta|Sexta|Sábado)\b)/);

      
        return dias.map((dia, index) => (
          <Page key={index + 1} size={[595.28, 900.00]} style={styles.page} pageNumber={index + 1}>
            <Image
              style={styles.logoCanto}
              src="https://api-nutrafity.vercel.app/imagem/logoTemplate.png"
            />
            <Text style={{ marginBottom: 10, padding: 20 }}>
              {dia}
            </Text>
          </Page>
        ));
      };
    
    return ( 
        <Document>
        <Page size={[595.28, 900.00]} style={styles.page} pageNumber={1}>
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
            src="https://api-nutrafity.vercel.app/imagem/logoTemplate.png"
            />  
        </Page>

        
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
        {renderizarDias(dieta)}
      </Document>
    )
}

export default ModeloPDf