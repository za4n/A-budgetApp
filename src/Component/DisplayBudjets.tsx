import  { useContext } from 'react';
import { budjetContext } from './Context/BudjetContextProvider';




export default function DisplayBudjets() {



  const { budgets ,expenses,removeExpense,removeBudjet} = useContext(budjetContext);
   const close = (id:number)=>{
    removeExpense(id);
   }
   const budjetX= (id:number)=>{
  removeBudjet(id);
   }

 
  return (
    <div className="d">
      <div className='heading'><h2>All budgets</h2></div>
      <section className="display">
        {budgets.map(bud=>{
          return <div className='budjetCard' key={bud.id}>
                 <div className="main">
                 <p className="name">{bud.name}</p>
                  <span className="amount">{bud.amountLeft} / {bud.amount}</span>
                  <div className="close" onClick={()=>{budjetX(bud.id)}}>X</div>
                  </div>
                  <section className='expenses'>
                   {expenses.filter(exp=>exp.budjetType===bud.name).map(expense=>(
                    <div key={expense.id} className='expenseCard'>{
                      <div className="main2">
                        <p className='name'>{expense.name}</p>
                        <span className="amount">{expense.amount}</span>
                        <div className="close" onClick={()=>{close(expense.id)}}>X</div>
                      </div>
                    }</div>
                   ))}
                  </section>
                 </div>
        })}
      </section>
    
    </div>
  );
}