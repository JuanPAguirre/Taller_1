import { useGlobal } from "./context";

const TransactionItem = ({transaction}) => {
    const {delTransaction, editTransaction} = useGlobal()

  return (

    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg 
    block mb-2 w-full flex justify-between items-center">
        <p className="text-sm  w-full">{transaction.nombre}</p>
        <p className="text-sm  w-full">{transaction.tipo}</p>
        <div>
        <span>${transaction.cantidad}</span>
        <button className="px-2 font-bold w-full" onClick={(e)=>{delTransaction(transaction.id)}}> X </button>
        <button className="px-2 font-bold w-full" onClick={(e)=>{editTransaction(transaction)}}> E </button>
        </div>
    </li>
  );
}

export default TransactionItem