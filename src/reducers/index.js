import { combineReducers } from 'redux';
import artistsReducer from './artist_reducer';

const rootReducer = combineReducers({
    artists:artistsReducer
})

export default rootReducer;