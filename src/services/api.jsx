import axios from 'axios'
axios.defaults.headers.get['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';



export const GerarDietaAPI = async (usuario) => {
    let url = 'https://localhost:9002/gerarDieta'
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

// export const UpdatePopup = async (clientId: any, email: any) => {
//     let url = `https://a4.lineragames.com.br/api/Otg/UpdatePopup?ClientId=${clientId}&Email=${email}`;
  
//     try {
//       const response = await axios.post(url,
//         {
//           headers: {
//             'Content-Type': 'application/json'
//           }
//         });
  
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   };
  
  
//   export const GetPopupStatus = async (clientId: any, email: string) => {
//     let url = `https://a4.lineragames.com.br/GetPopupStatus?ClientId=${clientId}&Email=${email}`;
  
//     try {
//       const response = await axios.get(url)
//       return response;
//     } catch (error) {
//       console.log(error)
//     }
//   }
  