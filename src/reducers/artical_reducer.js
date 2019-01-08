
export default function (state = {}, action) {
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
        case 'GET_SELECTED_NEWS':
            return {
                ...state,
                selected: action.payload
            }
        case 'CLEAR_NEWS':
            return {
                ...state,
                selected: action.payload
            }
        case 'HANDLE_LIKE_ARTICLE':
            return{
                ...state,
                selected: [action.payload]
            }
        default:
            return state;
    }
}