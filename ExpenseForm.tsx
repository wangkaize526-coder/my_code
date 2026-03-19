import {z} from 'zod';
import {useForm} from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

interface Props
{
    onsubmit:(data:ExpenseFormData)=>void;
}

const schema=z.object({
    description: z.string().max(100).min(3),
    amount: z.number().max(1000).min(10),
    category: z.enum(['U','A','R'])
})


type ExpenseFormData= z.infer<typeof schema>

function ExpenseForm({onsubmit}:Props) {
    const {register, handleSubmit,reset, formState:{errors}}= useForm<ExpenseFormData>({resolver:zodResolver(schema)});

    return (
        <form onSubmit={handleSubmit(data=>{
            onsubmit(data);
            reset();
        })}>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <input {...register('description')} id="description" type="text" className="form-control"></input>
                {errors.description&& <p className='text-danger'>{errors.description.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="amount" className="form-label">Amount</label>
                <input {...register('amount', {valueAsNumber: true})} id="amount" type="number" className="form-control"></input>
                {errors.amount&& <p className='text-danger'>{errors.amount.message}</p>}
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <select {...register('category')} id="category" className="form-select">
                    <option value="">All category</option>
                    <option value="U">U</option>
                    <option value="A">A</option>
                    <option value="R">R</option>
                </select>
                {errors.category&& <p className='text-danger'>{errors.category.message}</p>}
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    );
}

export default ExpenseForm;