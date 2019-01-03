
export default function(state={},action){
    switch (action.type) {
        case 'GET_LATTEST':
            return {
                ...state,
                lattest: action.payload
            }
        case 'GET_OTHERS':
            return {
                ...state,
                others: action.payload 
            }
        case 'GET_GALLERY':
            return {
                ...state,
                gallery: action.payload
            }
            
        default:
            return state;
    }
}