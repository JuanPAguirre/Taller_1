import { useGlobal } from "./context"
import SearchBar from "./SearchBar"
import TransactionItem from "./TransactionItem"

const TransactionList = () => {
    const {transactions} = useGlobal()
    


  return (
    <>
    <h2 className="text-slate-300 text-2xl font-bold w-full">Lista de movimientos</h2>
    <SearchBar />
        <ul>
            {transactions.map(transaction =>(
            <TransactionItem transaction={transaction}
            key={transaction.id} />
        ))}
        </ul>
    </>
  )
}

export default TransactionList