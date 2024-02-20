import Expenseitem from "./component/ExpenseItem";
import ExpenseForm from "./component/Expenseform.jsx";
import { useEffect, useState } from "react";
import axios from "axios"

const App=()=>{
  

const[expenses,setExpense]=useState([
  // {id:1,title:"Food",amount:-1000},
  //   {id:2,title:"Movie",amount:-500},  
      
  //   {id:3,title:"Salary",amount:70000},
  //   {id:4,title:"Loan",amount:-5000},
//     {id:5,title:"stock",amount:5000},
])
useEffect(()=>{
  axios.get('https://expense-tracker-backend-2jt7.onrender.com/get-entries')
  .then(res=>{
    console.log(res.data)
    setExpense(res.data)
    // addExpense(res.data)
  })
  .catch(err => {console.log(err)})
},[])


const addExpense=(title,amount) =>{
  const nextId=expenses.length === 0 ? 1 :expenses[expenses.length-1].id+1
  setExpense([...expenses,{id:nextId,title:title,amount:amount}])
  // import { MongoClient } from 'mongodb';
}
const deleteExpense = (id)=>{
  setExpense(expenses.filter((exp)=>exp.id !==id));
}; 

let income=0
let expense=0
expenses.forEach((exp)=>{
  if(exp.amount>0){
    income=income+exp.amount
  }else{
    expense=expense+exp.amount
  }
})
  return(
    <>
<div className="head">Expense tracker</div>
<div className="center">
<div className="left over">total: {income+expense}</div></div>
      <div className="Income-expense-container">
      <div className="Income">
        <span className="title">Income</span>
        <span>{income}</span>
      </div>
      <div className="block"></div>
      <div className="Expense">
        <span className="title">Expense</span>
        <span>{expense}</span>

      </div>
      </div>
     <ExpenseForm addExpense={addExpense}/>
    {expenses.map((item)=>(
    <Expenseitem key={item.id} 
    ondelete={deleteExpense} {...item} />
  ))}


  
   
    </>
    )
  }


export default App