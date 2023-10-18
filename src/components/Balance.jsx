import { useState } from "react";
import {useGlobal} from "./context"

const Balance = () => {

    const [initial, setInitial] = useState(0);
    const {transactions} = useGlobal();
    const valores = transactions.map(transactions => transactions.cantidad)
    const total = valores.reduce((acc, item) =>(acc += item),initial)

  return (
    <>
    <div className="flex justify-between">
        <h1 className="text-2cl font-bold">Saldo Inicial:{" "}
        <input 
            name="Inicial" 
            value={initial} 
            onChange={(e) => setInitial(parseFloat(e.target.value))}
            className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
        />
        </h1>
    </div>
    <div className="flex justify-between">
        <h1 className="text-2cl font-bold">Saldo final: ${total}</h1>
        
    </div>
    </>
  )
}

export default Balance