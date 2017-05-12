import React from 'react';
import Activity from './Activity'
import { connect } from 'react-redux'
import * as selectors from '../selectors'


const mapStateToProps = (state, ownProps)=> {
  const filteredActivities = selectors.getActivitiesByFilter(state.activities, state.activityType)
  return {
    activities: filteredActivities
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    onRowClick:(id)=> dispatch({ type: 'SET_SELECTED_ID', id })
  }
}


const Table = ({onRowClick, activities}) =>
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
      {activities.map((activity, index)=> <Activity key={index} id={activity.id} data={activity} onRowClick={onRowClick}/> )}
    </tbody>
  </table>

export default connect(mapStateToProps, mapDispatchToProps)(Table)
