
interface Props
{
    onSelectCategory: (category:string)=>void;
}

const ExpenserFilter= ({onSelectCategory}:Props)=>
{
    return (
        <select className="form-select" onChange={(event)=>onSelectCategory(event.target.value)}>
            <option value="1">All category</option>
            <option value="U">U</option>
            <option value="A">A</option>
            <option value="R">R</option>
        </select>
    );
}
export default ExpenserFilter