import { useState } from "react"
import { useGlobal } from "./context"
import uuid4 from "uuid4"

const Transaction = () => {
    const {addTransaction} = useGlobal()
    const[tipo,setTipo] = useState(" ");
    const [nombre, setNombre] = useState()
    const [cantidad, setCantidad] = useState()

    const submit = (e)=> {
        e.preventDefault(); 
        if (tipo === "ingreso"){
        addTransaction({
            id:uuid4(),
            nombre,
            cantidad: + cantidad,
            tipo,
        })}else{
            addTransaction({
                id:uuid4(),
                nombre,
                cantidad: - cantidad,
                tipo,
        })
        };
        setNombre(" ");
        setCantidad(0);
    }
     
  return (
    <div>
        <form onSubmit={submit}> 
            Tipo: <select className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full" 
                onChange={(e)=>setTipo(e.target.value)} 
                value={tipo}>
            <option></option>
            <option name="ingreso" value="ingreso">Ingreso</option>
            <option name="gasto" value="gasto">Gasto</option>
            </select>
            <input type="text" placeholder="Nombre"
                onChange={(e)=>setNombre(e.target.value)}
                className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                value={nombre}
            />
            <input type="Number" step="0.01" placeholder="Cantidad"
                onChange={(e)=>setCantidad(e.target.value)}
                className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                value={cantidad}
            />
            <button className="bg-indigo-700 text-white px-3 py-2 rounded-lg block mb-2 w-full">
                Agregar movimiento
            </button>
        </form>
    </div>
  )
}

export default Transaction