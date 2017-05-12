import React from 'react';
import logo from './logo.svg';
import './App.css';
import Transaction from './Transaction'
import * as selectors from './selectors'
import { connect } from 'react-redux'
import Table from './components/Table'
import FilterLink from './containers/FilterLink'

const mapStateToProps = (state, ownProps) => {
  const filter = ownProps.params.activityType
  const filteredActivities = selectors.getActivitiesByFilter(state.activities, filter)
  return {
    transaction: state.transaction,
    activityType: filter,
    totalAmount: selectors.getTotal(filteredActivities)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearTransactionId: ()=> dispatch({type:'CLEAR_TRANSACTION_ID'})
  }
}

const App = ({dispatch, transaction, activityType, clearTransactionId, totalAmount, params}) => {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>VisualizeEverything</h2>
        </div>

        <div className="container-fluid">
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
    );
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)
