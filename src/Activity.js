import React, { Component } from 'react';
import transactionData from './transaction_data.json'
import * as selectors from './selectors'
import moment from 'moment'

export default ({id, data}) =>{
  // const transactionById = (id) => transactionData.filter((transaction)=> transaction.id == id)
  const transactionById = selectors.getTransactionById(data.parent_id)

  return (
    <tr onClick={()=>console.log(data.parent_id, transactionById)}>
    <td><input type="checkbox"/></td>
    <td>{moment(data.updated_at).format("MMM Do [']YY")}</td>
    <td>{data.name}</td>
    <td>{data.description}</td>
    <td>{data.activity_type}</td>
    <td>${data.amount}</td>
    <td>{data.activity_meta && data.activity_meta.mcc || 'N/A'}</td>
  </tr>
  )
}
