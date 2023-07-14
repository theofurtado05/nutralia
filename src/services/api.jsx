import axios from 'axios'
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';



export const GerarDietaAPI = async (usuario) => {
    let url = 'https://api-nutralia.vercel.app/Dieta'
    try{
        const response = await axios.post(url, usuario, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        return response
    }catch(error){
        console.log(error)
    }
    
}

