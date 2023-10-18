import { useGlobal } from "./context"

const InEx = () => {

  const {transactions} = useGlobal();
  const valores = transactions.map((transaction) => transaction.cantidad);

  const income = valores
                  .filter(item => item > 0)
                  .reduce((acc, item) => (acc += item), 0) 
                  .toFixed(2);

  const expense = valores
                  .filter(item => item < 0)
                  .reduce((acc, item) => (acc += item), 0)* -1
                  .toFixed(2);

  return (
    <>
        <div className="flex jsutify-between my-2">
            <h4>Inicial: </h4>
            <p>{income}</p>
        </div>
        <div className="flex jsutify-between my-2">
            <h4>Final: </h4>
            <p>{expense}</p>
        </div>
    </>
  )
}

export default InEx