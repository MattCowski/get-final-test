import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import activityData from './activity_data.json'
import transactionData from './transaction_data.json'
import Transaction from './Transaction'
import * as selectors from './selectors'
import { connect } from 'react-redux'
import Table from './components/Table'

const mapStateToProps = (state) => {
  return {
    transaction: state.transaction
  }
}

const App = ({dispatch, transaction}) => {
    const payments = activityData.filter((activity)=>activity.activity_type == 'payments')
    const transactions = activityData.filter((activity)=>activity.activity_type == 'transactions')
    const rewards = activityData.filter((activity)=>activity.activity_type == 'rewards')
    const fees = activityData.filter((activity)=>activity.activity_type == 'fees')

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>VisualizeEverything</h2>
          <Transaction id={transaction.id}/>

        </div>
        <div className="container-fluid">
          Total Amount: {selectors.getTotal(payments)}
          <button className="btn btn-default" onClick={console.log('click')}>Payments only</button>

          <h3>Payments</h3>
          <Table />
        </div>

      </div>
    );
  }

export default connect(mapStateToProps)(App)
