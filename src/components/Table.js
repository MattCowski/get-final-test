import React, {PropTypes} from 'react';
import Activity from './Activity'

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


Table.propTypes = {
  onRowClick: PropTypes.func.isRequired,
  // activities: PropTypes.obj.isRequired
}

export default Table
