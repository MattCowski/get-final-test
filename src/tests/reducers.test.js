import React from 'react';
import ReactDOM from 'react-dom';
import activityData from '../activity_data.json'
import * as selectors from '../selectors'
import {transaction as transactionReducer, activities as activitiesReducer} from '../reducers'

describe('transaction reducer',()=>{
  it('should set id to null if doesnt exist',()=>{
    expect(transactionReducer(undefined,{type:'SET_SELECTED_ID', id:123})).toEqual({id:null})
  })

  it('should clear ID',()=>{
    expect(transactionReducer({id:123},{type:'CLEAR_TRANSACTION_ID', id:123})).toEqual({id:null})
  })
})

describe('activities reducer',()=>{
  
})
