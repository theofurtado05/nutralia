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
        Mostre o valor aproximado de cada refeicao. Deve ter 3 variedades em cada horario. (Me de listados e cada item iniciando com um hifen (-) e com nomes 100% em portugues. Separe por "MANHA", "MEIO DIA", "TARDE" e "NOITE". Tambem coloque o valor total por periodo e no final)`,
        temperature: 1,
        max_tokens: 550,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      

    return response.data.choices[0].text.trim();
  
};
