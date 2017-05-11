import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import activityData from './activity_data.json'
import transactionData from './transaction_data.json'
import Activity from './Activity'
import Transaction from './Transaction'
import * as selectors from './selectors'

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
          Total Amount: {selectors.getTotal(payments)}
          <button className="btn btn-default" onClick={console.log('click')}>Payments only</button>

          <h3>Payments</h3>
          <table className="table table-striped table-hover">
            <thead>
            <tr>
              <th>#</th>
              <th>Date</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category / Type</th>
              <th>Amount</th>
              <th>Meta MCC</th>

        </tr>
        </thead>
        <tbody>
            {activityData.map((activity, index)=> <Activity key={index} id={activity.id} data={activity}/> )}
          </tbody>
          </table>
        </div>

      </div>
    );
  }
}

export default App;
