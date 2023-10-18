import Balance from "./components/Balance";
import InEx from "./components/InEx";
import Header from "./components/Header";
import Transaction from "./components/Transaction";
import TransactionList from "./components/TransactionList";
import { Provider } from "./components/context"

const App = ({saldoInicial,setSaldoInicial,saldoFinal}) => {

  return (
    <Provider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-2/6">
            <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-5">
              <div>
              <div>
                <Header className="text-4xl font-bold"
                  saldoInicial={saldoInicial}
                  setSaldoInicial={setSaldoInicial}
                  saldoFinal={saldoFinal}
                />
                </div>
                <InEx/>
                <Balance/>
                <Transaction />
              </div>
              <div className="w-full">
                <TransactionList />
              </div>
            </div>
        </div>
      </div>
    </Provider>
  )
}

export default App;
 