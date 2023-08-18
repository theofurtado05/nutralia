import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';

// Resto do código do seu arquivo

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);


export const GerarDietaPrompt = async (infoUsuario) => {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `Haja como um nutricionista e me de um plano alimentar de manha, meio dia, tarde e noite para uma pessoa com as seguintes caracteristicas:
        - ${infoUsuario.altura}m de altura;
        - ${infoUsuario.peso}kg;
        - Com o objetivo de ${infoUsuario.objetivo};
        - Com intolerancia a: ${infoUsuario.intolerancia}.
        - Gastando até R$500,00 por semana;
        Mostre o valor aproximado de cada refeicao e sua quantidade(unidade ou peso). Deve ter 3 variedades em cada horario. (Me de listados e cada item iniciando com um hifen (-) e com nomes 100% em portugues. Separe por "MANHA", "MEIO DIA", "TARDE" e "NOITE". Tambem coloque o valor total por periodo e no final)`,
        temperature: 1,
        max_tokens: 550,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      

    return response.data.choices[0].text.trim();
  
};

const TestePrompt = async () => {
  const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Haja como um nutricionista e me de um plano alimentar de manha, meio dia, tarde e noite para uma pessoa com as seguintes caracteristicas:
      - 1,76m de altura;
      - 74kg;
      - Com o objetivo de HiperTrofia;
      - Com intolerancia a: Sem intolerancia.
      - Meta diaria: 74g de Proteinas, 196g de Carboidrato e 1890kcal de Calorias
      -Preferencia: Adicione pelo menos 1 doce na minha dieta
      - Gastando até R$500,00 por semana;
      Mostre o valor aproximado de cada refeicao e sua quantidade(unidade ou peso). Deve ter 3 variedades em cada horario (3 itens na lista apenas, um embaixo do outro). (Me de listados e cada item iniciando com um hifen (-) e com nomes 100% em portugues. Separe por "MANHA", "MEIO DIA", "TARDE" e "NOITE". Tambem coloque o valor total por periodo, sempre nessa ordem: PERIODO, ITEM 1, ITEM 2, ITEM 3, VALOR)`,
      temperature: 1,
      max_tokens: 700,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    

  console.log( response.data.choices[0].text.trim());

};

export const GerarMetaDiaria = async () => {
  const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `
      - 1,76m de altura;
      - 74kg;
      - Com o objetivo de emagrecimento;
      - Com intolerancia a: Sem intolerancia.
      Com essas informaçoes, me de a quantidade de proteinas, carboidratos e calorias que preciso ingerir por dia.
      Me de nesse formato: 
      Proteina: quantidade em g
      Carboidrato: quantiade em g
      Lipídio: quantiade em g
      `,
      temperature: 1,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    

  console.log(response.data.choices[0].text.trim());
    return response.data.choices[0].text.trim()
};

window.onload = () => {
  console.clear()
  //GerarMetaDiaria()
  // console.log('Segunda')
  // TestePrompt()
  // console.log('Terca')
  // TestePrompt()
  // console.log('Quarta')
  // TestePrompt()
  // console.log('Quinta')
  // TestePrompt()
  // console.log('Sexta')
  // TestePrompt()
  // console.log('Sabado')
  // TestePrompt()
  // console.log('Domingo')
  // TestePrompt()
}