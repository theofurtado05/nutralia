import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';

// Resto do código do seu arquivo

const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });
const openai = new OpenAIApi(configuration);

//...

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

export const TestePrompt = async (obj, objMetaDiaria) => {
  const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Haja como um nutricionista e me de um plano alimentar de manha, meio dia, tarde e noite para uma pessoa com as seguintes caracteristicas:
      - ${obj.altura}m de altura;
      - ${obj.kg}kg;
      - Com o objetivo de ${obj.objetivo};
      - Com intolerancia a: ${obj.intolerancia}.
      - Meta diaria: ${objMetaDiaria.proteina}g de Proteinas, ${objMetaDiaria.carboidrato}g de Carboidrato e ${objMetaDiaria.lipidios}g de Lipidios
      -Preferencia: Adicione pelo menos 1 doce na minha dieta;

      Mostre o valor aproximado de cada refeicao e sua quantidade(unidade ou peso). 
      
      Deve ter 3 variedades em cada horario (3 itens na lista apenas, um embaixo do outro). 
      Me de listados e cada item iniciando com um hifen (-) e com nomes 100% em portugues. Use o hifen apenas para quando for pular de linha, ou seja, de um item para o outro, as demais separaçoes utilize outro separador. 
      Separe por "MANHA", "MEIO DIA", "TARDE" e "NOITE". Tambem coloque o valor total por periodo, sempre nessa ordem: 
      PERIODO:, (sempre utilize : para finalizar essa linha)
      ITEM 1;  (sempre utilize ; para finalizar a linha, isso é o mais importante)
      ITEM 2;  (sempre utilize ; para finalizar a linha, isso é o mais importante)
      ITEM 3;  (sempre utilize ; para finalizar a linha, isso é o mais importante) 
      VALOR: R$99,99 *APENAS O VALOR TOTAL DO PERIODO, SEM O VALOR POR ITEM e TUDO NA MESMA LINHA) 
      evite adicionar qualquer coisa alem disso e me de o texto com os itens sempre um embaixo do outro.
      `,
      temperature: 1,
      max_tokens: 700,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    
    
    return response.data.choices[0].text.trim();

};

export const GerarMetaDiaria = async (obj) => {
  const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `
      - ${obj.altura}m de altura;
      - ${obj.kg}kg;
      - Com o objetivo de ${obj.objetivo};
      - Com intolerancia a: ${obj.intolerancia}.
      Com essas informaçoes, me de a quantidade de proteinas, carboidratos e lipidio que preciso ingerir por dia.
      Me de nesse formato: 
      Proteína: quantidade em g
      Carboidrato: quantiade em g
      Lipídio: quantiade em g

      Me retorne sempre com os nomes igual te passei, primeira letra maiuscula e no singular
      
      `,
      temperature: 1,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    

    //console.log(response.data.choices[0].text.trim())
    return response.data.choices[0].text.trim()
};

