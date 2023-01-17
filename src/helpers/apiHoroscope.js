import { usabilidades } from "./usabilidades";



export const getData =  (signo, dataAdd)=>{
  

  let informacion = {}
    const url = `https://sameer-kumar-aztro-v1.p.rapidapi.com/?sign=${signo}&day=today`;
    
    const options = {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': '9a728c70acmsh13b5d3b50d9af2dp1c73cbjsn498e328370be',
        'X-RapidAPI-Host': 'sameer-kumar-aztro-v1.p.rapidapi.com'
      }
    };
    try {
        
       fetch(url, options)
        .then(res=> res.json())
        .then(data=> {
            informacion = data
            console.log(informacion)
            usabilidades(informacion, dataAdd)
        })

    } catch (error) {
        
        console.error('error:' + error);
    }

}

