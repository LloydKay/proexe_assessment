import axios from 'axios'
// import { FETCH_USER, ADD_USER } from './types'

export const FetchUsers = () => async(dispatch) => {
    try {
        const data = await axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data')

        if(data.data){
            dispatch({type: 'FETCH_USER', payload: data.data})
        }
        
    } catch (error) {
        
    }
}

export const AddUser = (userData, history) => async(dispatch) => {
    try {
        console.log(userData)
            dispatch({type: 'ADD_USER', payload: userData})
        history('/')
    } catch (error) {
        console.log(error);
    }
}




