import React from 'react';
import logo from './logo.svg';
import './App.css';
import Transaction from './Transaction'
import * as selectors from './selectors'
import { connect } from 'react-redux'
import Table from './components/Table'

const mapStateToProps = (state) => {
  const filteredActivities = selectors.getActivitiesByFilter(state.activities, state.activityType)
  return {
    transaction: state.transaction,
    activityType: state.activityType,
    totalAmount: selectors.getTotal(filteredActivities)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setFilter:(type)=>dispatch({type})
  }
}

const App = ({dispatch, transaction, activityType, setFilter, totalAmount}) => {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>VisualizeEverything</h2>
          <Transaction transaction={transaction}/>
        </div>

        <div className="container-fluid">
          <button className="btn btn-default" onClick={()=>setFilter('FILTER_BY_REWARDS')}>REWARDS</button>
          <button className="btn btn-default" onClick={()=>setFilter('FILTER_BY_FEES')}>FEES</button>
          <button className="btn btn-default" onClick={()=>setFilter('FILTER_BY_PAYMENTS')}>PAYMENTS</button>
          <button className="btn btn-default" onClick={()=>setFilter('FILTER_BY_TRANSACTIONS')}>TRANSACTIONS</button>
          <button className="btn btn-default" onClick={()=>setFilter('CLEAR_FILTER')}>ALL</button>

          Total Amount: {totalAmount}

          <h3>Expense Activity</h3>
          <Table />
        </div>

      </div>
    );
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)
