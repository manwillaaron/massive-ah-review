import React from 'react'

export default function ExpensesDisplay(props){
    return(
        <div>
            <label>Amount</label>
            <p>{props.expense.amount}</p>
            <label>store</label>
            <p>{props.expense.store}</p>
            <hr/>
        </div>
    )
}