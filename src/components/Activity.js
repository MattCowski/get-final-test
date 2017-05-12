import React, {PropTypes} from 'react';
import moment from 'moment'

const Activity = ({id, data, onRowClick}) =>{
  return (
    <tr onClick={()=>onRowClick(data.parent_id)}>
    <td><input type="checkbox"/></td>
    <td>{moment(data.updated_at).format("MMM Do [']YY")}</td>
    <td>{data.name}</td>
    <td>{data.description}</td>
    <td>{data.activity_type}</td>
    <td>${data.amount.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,")}</td>
    <td>{data.activity_meta && data.activity_meta.mcc || 'N/A'}</td>
  </tr>
  )
}
Activity.propTypes = {
  onRowClick: PropTypes.func.isRequired,
  // data: PropTypes.obj.isRequired,
  // id: PropTypes.num.isRequired
}

export default Activity
