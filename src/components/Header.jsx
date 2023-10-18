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
              onChange={(e) => setSaldoInicial(e.target.value)}
          />
         Saldo final:
          <input 
              name="Final" 
              value={saldoFinal} 
              readOnly
          />
      </>
    )
  }
  
  export default Header