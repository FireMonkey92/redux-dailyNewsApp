const URL = 'http://localhost:3004';

export function lattestNews(){
         const request = fetch(`${URL}/articles?_order=desc&_end=3`,{
             method: 'GET'
         }).then(responce => responce.json())
         return {
             type : 'GET_LATTEST',
             payload: request
         }
}