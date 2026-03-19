import { useState } from "react";
import ExpenseList from "./expense_tracker/components/ExpenseList";
import ExpenserFilter from "./expense_tracker/components/ExpenseFilter";
import ExpenseForm from "./expense_tracker/components/ExpenseForm";
function App()
{
  const [selectCategory, setselectCategory]= useState("1");
  
  const [expenses, setExpenses]=useState(
    [
    {id:1, description: "aaa", amount:100, category:"U"},
    {id:2, description: "bbb", amount:100, category:"U"},
    {id:3, description: "ccc", amount:100, category:"A"},
    {id:4, description: "ddd", amount:100, category:"U"},
    {id:4, description: "ddd", amount:100, category:"R"}
    ]
  )
  const SubExpenses= selectCategory!=="1" ? expenses.filter((expense)=>(expense.category=== selectCategory))
  : expenses;
  

  return (
    <>
      <ExpenseForm onsubmit={(expense)=>setExpenses([...expenses, {...expense,id:expenses.length+1}])}></ExpenseForm>
      <br></br>
      <ExpenserFilter onSelectCategory={(category)=>setselectCategory(category)}></ExpenserFilter>
      <br></br>
      <ExpenseList expenses={SubExpenses} ondelete={(id)=>setExpenses(expenses.filter((e)=>e.id!=id))}></ExpenseList>
    </>
  );
}
export default App;
