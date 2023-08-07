import {useRef , useContext} from 'react';
import { budjetContext } from './Context/BudjetContextProvider';
import { budgetType } from './Context/BudjetContextProvider';

export default function GetBudjet() {
  const budgetName = useRef<HTMLInputElement>(null!);
  const budjetAmount = useRef<HTMLInputElement>(null!);
   
const {addBudjet,budgets}= useContext(budjetContext);
   const add = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    const bud:budgetType =  {id:budgets.length+1,name : budgetName.current.value , amount : parseInt(budjetAmount.current.value),amountLeft:parseInt(budjetAmount.current.value)};
    addBudjet(bud);
    budgetName.current.value = ""
    budjetAmount.current.value = "";
   }
    return ( 

<div className="budget">
  <h2>Create a Budget</h2>
  <form onSubmit={add} className="budget-form">
    <div className="input-group">
      <label htmlFor="budgetName">Budget Name</label>
      <input type="text" ref={budgetName} id="budgetName" required placeholder="Enter Budget Name" />
    </div>
    <div className="input-group">
      <label htmlFor="budgetAmount">Total</label>
      <input type="number" ref={budjetAmount} id="budgetAmount" required placeholder="0" />
    </div>
    <button className="budget-btn">Create</button>
  </form>
</div>
  )
}
