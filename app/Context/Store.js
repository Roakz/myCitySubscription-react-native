import React, {createContext, useReducer} from "react";
import Reducer from './Reducer'

// Initial state values accessable through throught the whole app. Manipulation of state occurs using dispatch
// Through the reducer. (./Reducer)
const initialState = {
    error: null,
    emailValue: "enter your email here...",
    passwordValue: "enter your password here...",
    passwordConfirmationValue: "confirm your password here...",
    nameValue: "Please enter your preffered name..."
};

const Store = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
};

export const Context = createContext(initialState);
export default Store;