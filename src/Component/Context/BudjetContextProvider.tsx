import {createContext,useEffect,useState} from 'react';

type BudjetContextProviderProps={
    children :React.ReactNode
}
export type budgetType = {
   id :number,
   name : string,
   amount:number ,
   amountLeft : number
}
export type budjet2 = {

}

export type ExpenseType = {
  id :number,
  name : string,
  amount:number,
  budjetType:string,
    
}

type budjetContextType = {
    addBudjet : (newBudjet:budgetType)=>void,
    budgets : budgetType[],
    addExpense : (newExpense:ExpenseType)=>void,
    expenses :ExpenseType[],  
    sWE : (expense:ExpenseType)=>void ,
    removeExpense : (id:number)=>void,
    removeBudjet :(id:number)=>void
}


export const budjetContext =  createContext<budjetContextType>({}as budjetContextType);
export default function BudjetContextProvider({children}:BudjetContextProviderProps) {
   const [budgets,setBudjet]  = useState<budgetType[]>([{id :1,name:"Grocerry",amount:4000,amountLeft:4000},{id :2,name:"Shopping",amount:3000,amountLeft:3000},{id :3,name:"Laundry",amount:1000,amountLeft:1000}]);
   const [expenses,setExpenses]  = useState<ExpenseType[]>([]);
   const  [workingExpense , setWorkingExpense] = useState<ExpenseType>({}as ExpenseType);
   const addBudjet = (newBudjet:budgetType)=>{
    const b = [...budgets];
    b.push(newBudjet);
    setBudjet(b);
   }
   const addExpense = (newExpense:ExpenseType)=>{
   const e = [...expenses];
   e.push(newExpense);
    setExpenses(e);
   }
   const sWE = (expense:ExpenseType)=>{
    setWorkingExpense(expense);
   }
   const removeExpense = (id:number)=>{
    setWorkingExpense(expenses.find(e=>e.id ===id)??{id:0,name:"",amount:0,budjetType:""});
    setExpenses((pre)=>{
      return pre.filter(p=>p.id !== id);
    })
   }
   const removeBudjet = (id:number)=>{
    
    setBudjet((pre)=>{
      return pre.filter(p=>p.id !== id);
    })
   }
   
   
   
   useEffect(()=>{
    if(workingExpense.id){
      
      let newBudjet = budgets.map((b)=>{
        if(b.name === workingExpense.budjetType){
          if(expenses.includes(workingExpense)){
            b.amountLeft -=workingExpense.amount
          }
          else{
            b.amountLeft +=workingExpense.amount
          }
        }
        return b;
      })
      setBudjet(newBudjet)
    }
   },[expenses])

  
   const value = {
    addBudjet,
    budgets,
    addExpense,
    expenses,
    sWE,
    removeExpense,
    removeBudjet,
    
   }

  return (
    <budjetContext.Provider value={value}>{children}</budjetContext.Provider>
  )
}
