import React, { Component } from 'react';
import transactionData from './transaction_data.json'

export default ({id, data}) =>{
  const isTransaction = data.activity_type == 'transactions'
  const transactionObject = transactionData.map((transaction)=>{
    return {[transaction.id]:transaction}
  })
  const transactionKeys = Object.keys(transactionObject)

  return (
    <div className="row">
    <div className="col-xs-2">parent ID:{data.parent_id}</div>
    <div className="col-xs-2">activity_type: {data.activity_type}</div>
    <div className="col-xs-2">Name: {data.name}</div>
    <div className="col-xs-2">Amount: ${data.amount}</div>
    <div className="col-xs-2">Transaction: {JSON.stringify(transactionKeys.includes(data.parent_id))}</div>

  </div>
  )
}
