import { 
    ADMIN_IS_TRUE, 
    USER_LOADING,
    USER_LOADED,
} from "../actions/types";
const initialState = {
    token: localStorage.getItem('token'),
    isAdmin: null,
    isAuthenticated: null,
    isLoading: false,
    user:null
    
}
export default function (state = initialState, action){
    switch(action.type){
        case USER_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case ADMIN_IS_TRUE:
            return {
                ...state,
                isAdmin: true
            }
    }
}