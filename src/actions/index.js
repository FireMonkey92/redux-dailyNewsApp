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
export function othersNews(){

    const request = fetch(`${URL}/articles?_order=desc&_start=3&_end=10`,{
        method: 'GET'
    }).then(responce => responce.json())
    return {
        type : 'GET_OTHERS',
        payload: request
    }
}

export function getGallery(){

    const request = fetch(`${URL}/galleries`,{
        method: 'GET'
    }).then(responce => responce.json())
    return {
        type : 'GET_GALLERY',
        payload: request
    }
}