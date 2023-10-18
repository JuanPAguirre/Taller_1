import { useGlobal } from "./context";

const TransactionItem = ({transaction}) => {
    const {delTransaction, editTransaction} = useGlobal()

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg 
    block mb-2 w-full flex justify-between items-center">
        <p className="text-sm">{transaction.nombre}</p>
        <div>
        <span>${transaction.cantidad}</span>
        <button className="px-3 font-bold" onClick={(e)=>{delTransaction(transaction.id)}}> X </button>
        <button type="submit" className="px-3 font-bold" onClick={(e)=>{editTransaction(transaction.id)}}> E </button>
        </div>
    </li>
  );
}

export default TransactionItem