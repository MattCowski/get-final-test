import { connect } from 'react-redux'
import * as selectors from '../selectors'
var LineChart = require("react-chartjs").Line;


const mapStateToProps = (state, ownProps)=>{
  const filter = ownProps.params.activityType
  const filteredActivities = selectors.getActivitiesByFilter(state.activities, filter)
  const amounts = selectors.getAmounts(filteredActivities)
  const dates = selectors.getDates(filteredActivities)
  return {
    data: {
        labels: dates,
        datasets: [{
            label: '# of Votes',
            data: amounts,
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    },
    width: '600',
    height: '250'
  }
}

export default connect(mapStateToProps)(LineChart)
