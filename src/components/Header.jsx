import { useState } from "react";

const Header = () => {

    const [saldoInicial, setSaldoInicial] = useState(0);
    const [saldoFinal, setSaldoFinal] = useState(0);

    return (
      <>
         Saldo inicial:{" "}
         <input 
              name="Inicial" 
              value={saldoInicial} 
              className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
              onChange={(e) => setSaldoInicial(e.target.value)}
          />
      </>
    )
  }
  
  export default Header