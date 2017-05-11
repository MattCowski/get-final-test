import React, { Component } from 'react';
import transactionData from './transaction_data.json'
import * as selectors from './selectors'

export default ({id}) =>{
  return (
    <code>{JSON.stringify(selectors.getTransactionById(id))}</code>
  )
}
