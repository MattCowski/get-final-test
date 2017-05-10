import React, { Component } from 'react';
import transactionData from './transaction_data.json'

export default ({data}) =>{
  const transactionObject = transactionData.map((transaction)=>{
    return {[transaction.id]:transaction}
  })
  return (
    <code>{JSON.stringify(transactionObject[0])}</code>
  )
}
