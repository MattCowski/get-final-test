import React, {PropTypes} from 'react';
import logo from './logo.svg';
import './App.css';
import Transaction from './Transaction'
import Table from '../containers/Table'
import FilterLink from './FilterLink'
import Chart from '../containers/Chart'

const App = ({transaction, activityType, clearTransactionId, totalAmount, params}) =>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>VisualizeEverything</h2>
        </div>

        <div className="container-fluid">
          <Chart params={params}/>
          <h3>Expense Activity</h3>
          Filter by:{" "}
          <FilterLink filter="payments">Payments</FilterLink>{" "}
          <FilterLink filter="rewards">Rewards</FilterLink>{" "}
          <FilterLink filter="fees">Fees</FilterLink>{" "}
          <FilterLink filter="transactions">Trasactions</FilterLink>{" "}
          <FilterLink filter="">All</FilterLink>{" "}
        <br/>

          <h4>Total {activityType} amount: ${totalAmount.toString().replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")}</h4>
          {transaction.id ?
            <Transaction transaction={transaction} onClick={clearTransactionId}/>
            : <Table params={params}/>
          }

        </div>
      </div>

App.propTypes = {
  clearTransactionId: PropTypes.func.isRequired,
  // transaction: PropTypes.obj.isRequired,
  totalAmount: PropTypes.num
}


export default App
