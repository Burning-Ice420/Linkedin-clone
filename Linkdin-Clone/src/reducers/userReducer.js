import { SET_USER } from "../actions/actionType";

const INITIAL_STATE ={
    user: null,
};


const useReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case  SET_USER:
            return{
                ...state,
                user: action.user,
            };
        default:
            return state;
    }
};

export default useReducer;
// state updater 