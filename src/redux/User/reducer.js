import { ADD_USER, DELETE_USER, FETCH_USER, UPDATE_USER,SELECTED_USER } from "./types"

const initialState ={ 
    users: [],
    user: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_USER: 
            return {...state, users: action.payload}
      
        case ADD_USER :
            return { ...state, users: [...state.users.concat(action.payload)]}
        case UPDATE_USER :
            return { ...state, arr: [...state.arr, action.payload]}
        case DELETE_USER :
            return { 
                users: state.users.filter((item) => item.id !== action.payload)
            };
            case SELECTED_USER:
			let user = state.users.filter(
				(item) => parseInt(action.payload) === parseInt(item.id),
			);
			return {
				...state,
				user: user[0],
			};
            case UPDATE_USER:{
                const index = state.users.findIndex((user) => user.id === action.payload.id);
			const newArr = [...state.users];
			newArr[index] = action.payload;
			return {
				...state,
				users: newArr,
			};
            }

            default:
                return {...state}
            
        
    }
}
