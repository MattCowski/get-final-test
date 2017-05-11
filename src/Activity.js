import React, { Component } from 'react';
import transactionData from './transaction_data.json'

export default ({id, data}) =>{
  const isTransaction = data.activity_type == 'transactions'
  const transactionObject = transactionData.map((transaction)=>{
    return {[transaction.id]:transaction}
  })
  const transactionKeys = Object.keys(transactionObject)
  const activityTransaction = transactionKeys.includes(data.parent_id) ? '': null
  const transactionById = (id) => transactionData.filter((transaction)=> transaction.id == id)

  return (
    <tr onClick={()=>console.log(id)}>
    <td><input type="checkbox"/></td>
    <td>{data.parent_id}</td>
    <td>{data.activity_type}</td>
    <td>{data.name}</td>
    <td>{data.amount}</td>
    <td>{data.activity_meta && data.activity_meta.mcc}</td>
    <td>{JSON.stringify(transactionById(data.parent_id).length,null,2)}</td>
  </tr>
  )
}
