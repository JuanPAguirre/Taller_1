export default (estado, action) => {
    switch(action.type){
        case "ADD_TRANSACTION":
            return {
                ...estado,
                transactions: [...estado.transactions, action.payload]
            };
        case "DEL_TRANSACTION":
            return {
                ...estado,
                transactions: estado.transactions.filter(
                (transaction)=> transaction.id !== action.payload
                ),
            };
        case "EDIT_TRANSACTION":
                return {
                    ...estado,
                    transactions: estado.transactions.filter(
                    (transaction)=> transaction.id !== action.payload
                    ),
                };
        
            default:
                return estado
    }
}