import React from "react";
export const addamount=()=>{
    return (
        <>

<h3>Add new transaction</h3>
<form>
<div class="form-control">
<label for="text">Text</label>
<input type="text" placeholder="Enter text..."/>
</div>
<div class="form-control">
<label for="amount"
>Amount <br />
(negative - expense, positive-income)</label>
<input type="number" placeholder="Enter amount..."/>
</div>
<button class="btn">Add transaction</button>
</form>
        </>
    )
}