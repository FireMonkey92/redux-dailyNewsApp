// const URL = 'http://localhost:3004';
const GIT_URL = 'https://my-json-server.typicode.com/FireMonkey92/redux-dailyNewsApp/'


export function lattestNews(){

         const request = fetch(`${GIT_URL}/articles?_order=desc&_end=3`,{
             method: 'GET'
         }).then(responce => responce.json())
         return {
             type : 'GET_LATTEST',
             payload: request
         }
}
export function othersNews(){

    const request = fetch(`${GIT_URL}/articles?_order=desc&_start=3&_end=10`,{
        method: 'GET'
    }).then(responce => responce.json())
    return {
        type : 'GET_OTHERS',
        payload: request
    }
}

export function getGallery(){

    const request = fetch(`${GIT_URL}/galleries`,{
        method: 'GET'
    }).then(responce => responce.json())
    return {
        type : 'GET_GALLERY',
        payload: request
    }
}
///////////////////////
export function getSelectedNews(id) {
    const request = fetch(`${GIT_URL}/articles?id=${id}`,{
        method :'GET'
    }).then(res => res.json())

    return{
        type : 'GET_SELECTED_NEWS',
        payload: request 
    }
}
export function clearNews(){
    return{
        type : 'CLEAR_NEWS',
        payload: []
    }
}

///////////////////////
export function getSelectedGallery(id) {

    const request = fetch(`${GIT_URL}/galleries?id=${id}` , {
        method :'GET' 
    }).then(res => res.json())

    return{
        type : 'GET_SELECTED_GALLERY',
        payload: request 
    }
}
export function clearSelectedGallery() {

    return {
        type : 'CLEAER_SELECTED_GALERY',
        payload: []
    }
}


////////////////////

export function handleLikes(newLikeArry,id,section,type) {
    
    const request =  fetch(`${GIT_URL}/${section}/${id}`,{
        method: 'PATCH',
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({likes:newLikeArry})

    }).then(res => res.json());

    return {
        type: type,
        payload : request
    }
}