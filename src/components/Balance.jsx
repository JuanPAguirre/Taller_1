import {useGlobal} from "./context"

const Balance = () => {

    const {transactions} = useGlobal();
    const valores = transactions.map(transactions => transactions.cantidad)
    const total = valores.reduce((acc, item) =>(acc += item),0)

  return (
    <div className="flex justify-between">
        <h1 className="text-2cl font-bold">Saldo final: ${total}</h1>
        
    </div>
  )
}

export default Balance