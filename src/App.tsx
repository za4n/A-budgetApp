import BudjetContextProvider from './Component/Context/BudjetContextProvider';
import GetBudjet from './Component/GetBudjet';
import DisplayBudjets from './Component/DisplayBudjets';
import GetExpense from './Component/GetExpense';
import RecentExpense from './Component/RecentExpense';


export default function App() {
  return (
    <div>
      <BudjetContextProvider>
      <div className="flex">
      <GetBudjet></GetBudjet>
      <GetExpense></GetExpense>
      </div>
      <DisplayBudjets></DisplayBudjets>
      <RecentExpense></RecentExpense>
      </BudjetContextProvider>
      
    </div>
  )
}
