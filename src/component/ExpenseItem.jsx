const Expenseitem=(props)=>{
    const { title,amount} = props
    const handleDelete=()=>{
        props.ondelete(props.id);
    };
    return(
    <div className="expense-item-container">
      <div className={`Expense-item ${ props.amount>0 ?'positive' :'negative'}`}>

      <div className="expense-tile">{props.title}</div>
      <div className="expense-amount">{props.amount}
      <button className="delete" onClick={handleDelete}>x</button></div>
      </div>
      
      </div> )
  }
  export default Expenseitem