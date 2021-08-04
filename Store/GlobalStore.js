import React, {useReducer,useEffect} from 'react'
import Reducers from './Reducer'
import { GetData } from '../Utils/FetchData'
export const Datacontect = React.createContext()
export const DataProvider = ({children})=>{
    const initialState ={
        notify: {},
        auth:{},
    }

    useEffect(() => {
        const firstLogin = localStorage.getItem("firstLogin");
        if(firstLogin){
            GetData('auth/accessToken').then(res=>{
                if(res.err) return localStorage.removeItem("firstLogin")
                dispatch({ 
                    type: "AUTH",
                    payload: {
                        token: res.access_token,
                        user: res.user
                    }
                })
            })
        }
    }, [])

    const [state, dispatch] = useReducer(Reducers, initialState)
    return(
        <Datacontect.Provider value={{state, dispatch}}>
            {children}
        </Datacontect.Provider>
    )
}
