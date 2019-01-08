export default function (state = {}, action) {
    switch (action.type) {

        case 'GET_GALLERY':
            return {
                ...state,
                gallery: action.payload
            }
        case 'GET_SELECTED_GALLERY':
            return {
                ...state,
                selectedGallery: action.payload
            }
        case 'CLEAER_SELECTED_GALERY':
            return {
                ...state,
                selectedGallery: action.payload
            }
        case 'HANDLE_LIKE_GALLERIES':
            return {
                ...state,
                selectedGallery: [action.payload]
            }
        default:
            return state;
    }
}