import { connect } from 'react-redux'
import * as selectors from '../selectors'
import Table from '../components/Table'

const mapStateToProps = (state, ownProps)=> {
  const filter = ownProps.params.activityType
  const filteredActivities = selectors.getActivitiesByFilter(state.activities, filter)
  return {
    activities: filteredActivities
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    onRowClick:(id)=> dispatch({ type: 'SET_SELECTED_ID', id })
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Table)
