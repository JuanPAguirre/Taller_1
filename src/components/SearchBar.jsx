import { useState, useEffect } from 'react';
import { useGlobal } from "./context"

const SearchBar = () => {
const [search, setSearch] = useState("");
const {transactions} = useGlobal()
const handleSubmit = (e) => e.preventDefault()

const searcher = (e) =>{
    setSearch(e.target.value);
    console.log(e.target.value)
}

const transaction = !search ? transactions : transactions.filter((transaction) =>
transaction.nombre.toLowerCase()
.includes(search.toLocaleLowerCase()))

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    className="search__input bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
                    type="text"
                    placeholder="Buscar"
                    onChange={searcher}
                />
                </form>    
        </header>
    )
}
export default SearchBar;

