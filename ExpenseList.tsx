
interface Expense
{
    id: number;
    description: string;
    amount: number;
    category: string;
}


interface Prop
{
    expenses:Expense[]; // store the expense object
    
    ondelete:(id:number)=>void; // a call back function to delete the expense
}


const ExpenseList = ({expenses, ondelete}:Prop)=>
{
    if (expenses.length===0) return null;
    
    return (
        <>
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Category</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {expenses.map((expense)=><tr key={expense.id}>
                    <td>{expense.description}</td>
                    <td>{expense.amount}</td>
                    <td>{expense.category}</td>
                    <td>
                        <button className="btn btn-outline-danger" 
                        onClick={()=>(ondelete(expense.id))} // every time click the button, 
                        // ondelete() will catch the current id, and App.tsx will receive the 
                        // current id, and use this id to compare the whole object's id, if e.id==id(current), 
                        // it can appear, if not, it will be removed by filter()
                        >
                            Cancel
                        </button>
                    </td>
                </tr>)}
            </tbody>
            <tfoot>
                <tr>
                    <td>SUM:</td>
                    <td>$ {expenses.reduce((acc,expense)=> expense.amount+acc,0)}</td>
                    <td></td>
                    <td></td>
                </tr>
            </tfoot>
        </table>
        </>
    );
}
export default ExpenseList