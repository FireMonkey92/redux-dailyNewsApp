import { combineReducers } from 'redux';
import articals from './artical_reducer';
import gallery from './gallery_reducer';

const rootReducers = combineReducers ({
    articals,
    gallery
});

export default rootReducers;