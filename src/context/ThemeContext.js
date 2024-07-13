import { useReducer } from "react";
import { createContext } from "react";

export const ThemeContext = createContext()

const themeReducer =(state , action)=>{
    switch(action.type){
        case 'CHANG_COLOR':
            return{ ...state ,color : action.payload}
        case 'CHANG_MODE':
            return{ ...state , mode : action.payload}
        default:
            return state
    }
}

export  function ThemeProvider({children}) {

    const [state,dispatch]= useReducer(themeReducer,{
        color:"",
        mode : "dark"
    })

    const changeColor= (color)=>{
        dispatch({type: 'CHANG_COLOR' , payload : color})
    }

    const changeMode= (mode)=>{
        dispatch({type: 'CHANG_MODE' , payload : mode })
    }
    
    return (
        <ThemeContext.Provider value = { {...state, changeColor , changeMode} }>
            {children}
        </ThemeContext.Provider>
    )
}
