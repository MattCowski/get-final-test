import React from 'react';

import * as selectors from '../selectors'
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
export default Activity
