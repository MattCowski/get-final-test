import transactionData from '../transaction_data.json'

export const getAmounts = (arr)=> arr.map((a)=> parseFloat(Math.round(a.amount * 100) / 100))

export const getTotal = (arr)=> +getAmounts(arr).reduce((prev, curr) => prev + curr).toFixed(2)

export const getTransactionById = (id) => transactionData.filter((transaction)=> transaction.id == id)

export const getActivitiesByFilter = (activities, filter)=> {
  return filter ? activities.filter((a)=>a.activity_type == filter) : activities
}
