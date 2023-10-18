import { useGlobal } from "./context"
import TransactionItem from "./TransactionItem"

const TransactionList = () => {
    const {transactions} = useGlobal()

  return (
    <>
    <h2 className="text-slate-300 text-xl font-bold w-full">Lista de movimientos</h2>
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