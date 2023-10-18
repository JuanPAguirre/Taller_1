import Balance from "./components/Balance";
import InEx from "./components/InEx";
import Header from "./components/Header";
import Transaction from "./components/Transaction";
import TransactionList from "./components/TransactionList";
import { Provider } from "./components/context"

const App = () => {

  return (
    <Provider>
      <div className="bg-zinc-950 text-white h-screen flex justify-center items-center">
        <div className="container mx-auto w-2/6">
            <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-10">
              <div>
              <div>
                <Header/>
                </div>
                <Balance/>
                <InEx/>
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
 