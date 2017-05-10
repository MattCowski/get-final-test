import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import activityData from './activity_data.json'
import transactionData from './transaction_data.json'
import Activity from './Activity'
import Transaction from './Transaction'

class App extends Component {
  render() {
    const payments = activityData.filter((activity)=>activity.activity_type == 'payments')
    const transactions = activityData.filter((activity)=>activity.activity_type == 'transactions')
    const rewards = activityData.filter((activity)=>activity.activity_type == 'rewards')
    const fees = activityData.filter((activity)=>activity.activity_type == 'fees')
    const other = ''
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>VisualizeEverything</h2>
        </div>
        <div className="container-fluid">

          <h3>Payments</h3>
          <Transaction/>
          {activityData.map((activity)=> <Activity id={activity.id} data={activity}/> )}
        </div>

      </div>
    );
  }
}

export default App;
