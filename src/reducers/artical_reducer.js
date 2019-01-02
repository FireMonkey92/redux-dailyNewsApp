export default function(state={},action){


    switch (action.type) {
        case 'GET_LATTEST':
            return {
                ...state,
                lattest: action.payload
            }
            break;    
        default:
            return state;
    }
}