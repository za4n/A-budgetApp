import {useRef , useContext,useState} from 'react';
import { budgetType, budjetContext } from './Context/BudjetContextProvider';
import { ExpenseType } from './Context/BudjetContextProvider';


export default function GetExpense() {
  const budgetName = useRef<HTMLInputElement>(null!);
  const Amount = useRef<HTMLInputElement>(null!);
  const {budgets,expenses,addExpense,sWE} = useContext(budjetContext);
  const [current , setCurrent]= useState<budgetType>(budgets[0]); 
  const s = (e:React.MouseEvent<HTMLSelectElement>)=>{
    e.preventDefault();
     const item = budgets.find(item=>item.name===e.target.value)??{name:"",id:0,amount:0 , amountLeft:0};
     setCurrent(item);
  }
  const createExpense = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    if(parseInt(Amount.current.value)<= current.amountLeft){
      const expense:ExpenseType = {id:expenses.length+1,name:budgetName.current.value,amount:parseInt(Amount.current.value),budjetType:current.name};
      sWE(expense);
      addExpense(expense);  
    }
    else{
      alert("out of budjet");
    }
    budgetName.current.value = "";
    Amount.current.value = "";
  }
    return ( 
<div className="budget">
  <h2>Create an Expense</h2>
  <form onSubmit={createExpense} className="budget-form">
    <div className="input-group">
      <label htmlFor="budgetName">Expense Name</label>
      <input type="text" ref={budgetName} id="budgetName" required placeholder="Enter Expense Name" />
    </div>
    <select id="select" onClick={s} >
    {budgets.map(item=><option  key = {item.id}>{item.name}</option>)}
    </select>
    <div className="input-group">
      <label htmlFor="budgetAmount">Total</label>
      <input type="number" ref={Amount} id="budgetAmount" required placeholder={`${current.amountLeft}`} />
    </div>
    <button className="budget-btn">Create</button>
  </form>
</div>
  )
}
