
import React, { useReducer } from "react";

const MainContext = React.createContext();

const initialState = {
    email: "",
    place: "",
    department: "",
    type: ""
}

const reducer = (state, action) =>{
    console.log(state)
    console.log( `%c${action.type}, %c${action.payload}`, 'color: green', 'color: yellow')
    switch(action.type){
        case "SET_EMAIL":
            return { ...state, email: action.payload }
        case "SET_PLACE":
            return { ...state, place: action.payload }
        case "SET_DEPARTMENT":
            return { ...state, department: action.payload }
        default:
            return state
    }
}

const Provider = (props) =>{
    const [state, dispatch] = useReducer(reducer, initialState);
    return(
        <MainContext.Provider
            value={{ state, dispatch }}
        >
            {props.children}
        </MainContext.Provider>
    )
}

export {
    Provider,
    MainContext
};