import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import activityData from './activity_data.json'
import * as selectors from './selectors'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe('Activity items',()=>{
  it('can be filtered by 5 types (transactions, fees, rewards, payments, other)',()=>{
    const fees = activityData.filter((a)=>a.activity_type == 'fees')
    const transactions = activityData.filter((a)=>a.activity_type == 'transactions')
    expect(fees[0].activity_type).toBe('fees')
    expect(transactions[0].activity_type).toBe('transactions')
  })

  it('can be filtered by "others"',()=>{
    expect(activityData.length).toBe(156)

    const fees = activityData.filter((a)=>a.activity_type == 'fees')
    expect(fees.length).toBe(1)

    const transactions = activityData.filter((a)=>a.activity_type == 'transactions')
    expect(transactions.length).toBe(142)

    const payments = activityData.filter((a)=>a.activity_type == 'payments')
    expect(payments.length).toBe(11)

    const rewards = activityData.filter((a)=>a.activity_type == 'rewards')
    expect(rewards.length).toBe(2)

    const types = ['fees','transactions','payments','rewards']
    const others = activityData.filter((a)=>!types.includes(a.activity_type) )
    expect(others.length).toBe(156 - (1+142+11+2))
  })

  it('should be able to calculate totals of all', ()=>{
    const total = selectors.getTotal(activityData)
    expect(total).toBe(20847.24)
  })
  it('should calculate total of rewards', ()=>{
    const rewards = activityData.filter((a)=>a.activity_type == 'rewards')
    const rewardsTotal = selectors.getTotal(rewards)
    expect(rewardsTotal).toBe(-39.62)
  })

  it('should calculate total of payments', ()=>{
    const payments = activityData.filter((a)=>a.activity_type == 'payments')
    const paymentsTotal = selectors.getTotal(payments)
    expect(paymentsTotal).toBe(14806.72)
  })
})

describe('Transaction items', ()=>{
  it('corresponds to an activity via Activity\'s parent_id',()=>{

  })

})
