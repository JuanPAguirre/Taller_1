import { createContext, useContext, useReducer, useEffect } from "react";
import Reducer from "./Reducer";

const stateInitial = {
    transactions: []
};

export const Context = createContext(stateInitial);

export const useGlobal = () => {
    const context = useContext(Context)
    return context
};

export const Provider = ({children}) => { 
    const [estado,dispatch] = useReducer (
        Reducer, 
        stateInitial,
        () => {
            const localData = localStorage.getItem("transactions");
            return localData ? JSON.parse(localData) : stateInitial;
        });
    
    useEffect(() => {
      localStorage.setItem("transactions", JSON.stringify(estado))
    }, [estado])
    

    const addTransaction = (transaction) => 
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    

    const delTransaction = (id) => 
        dispatch({
            type: "DEL_TRANSACTION",
            payload: id
        })
    
    const editTransaction = (id) => 
        dispatch({
            type: "EDIT_TRANSACTION",
            payload: id
        })
    

    return (
    <Context.Provider 
        value={{
            transactions: estado.transactions,
            addTransaction,
            delTransaction,
            editTransaction
        }}
        >{children}
    </Context.Provider>
    )};