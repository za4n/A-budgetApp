import  { useContext } from 'react';
import { budjetContext } from './Context/BudjetContextProvider';
export default function RecentExpense() {
    const {expenses,removeExpense} = useContext(budjetContext);
    const close = (id:number)=>{
        removeExpense(id);
       }
  return (
    <div className='recent'>
    <div className="child">
    <p className="name">Name</p>   
     <p className="type">Type</p> 
     <p className="amount">Amount</p> 
    </div>
    {expenses.map(expense=>{
        return <div className='child' key={expense.id}>
         <p className='name'>{expense.name}</p>
         <p className='type'>{expense.budjetType}</p>
         <p className='amount'>{expense.amount}</p>
         <button onClick={()=>{close(expense.id)}}>X</button>
        </div>
    })}
    </div>
  )
}
