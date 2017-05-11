import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import activityData from './activity_data.json'
import transactionData from './transaction_data.json'
import Activity from './Activity'
import Transaction from './Transaction'
var LineChart = require("react-chartjs").Line;

// data represents the chart data (see chart.js for details)
// options represents the chart options (see chart.js for details)
// all other parameters will be passed through to the canvas element
// if data passed into the component changes, points will animate between values using chart.js' .update(). If you want the chart destroyed and redrawn on every change, pass in redraw as a prop. For example <LineChart data={this.state.chartData} redraw />


class App extends Component {
  render() {
    const payments = activityData.filter((activity)=>activity.activity_type == 'payments')
    const transactions = activityData.filter((activity)=>activity.activity_type == 'transactions')
    const rewards = activityData.filter((activity)=>activity.activity_type == 'rewards')
    const fees = activityData.filter((activity)=>activity.activity_type == 'fees')
    const other = ''
    const chartData = {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }
    const chartOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>VisualizeEverything</h2>
        </div>
        <div className="container-fluid">
          <LineChart data={chartData} options={chartOptions} width="600" height="250"/>
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
