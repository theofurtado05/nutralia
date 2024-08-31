import axios from 'axios'
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

const objetivos = [
    "Emagrecer", "Ganho de massa muscular", "Definição muscular", "Jejum intermitente", "Melhorar a alimentação", "Aumentar a performance física", 
    "Hipertrofia"
]


export const GerarDietaVercel = async (objetivo) => {
    const url = `https://api-nutrafity.vercel.app/gerarDieta?objetivo=${objetivo}`

    

    try {
        const response = await axios.get(url,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        return response
    } catch (err) {
        throw err
    }
}

export const GerarTreinoVercel = async (objetivo) => {
    const url = `https://api-nutrafity.vercel.app/gerarTreino?objetivo=${objetivo}`
    
    try {
        const response = await axios.get(url, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response
    } catch (err) {
        throw err
    }
}


// Dieta%20Semanal%20com%20Treino
// Dieta%20Semanal
// Dieta%20Basica