import { userReducer } from './user.reducer';
import { errorReducer } from './error.reducer';
import { ngoReducer } from './ngo.reducer';

export const reducers = {
    user: userReducer,
    error: errorReducer,
    ngo: ngoReducer
    //.....
}