import React from 'react';

export default ({transaction, onClick}) =>
  <div className="row">
    <div className="col-xm-12">
      <button className="btn btn-primary" onClick={onClick}>View all transactions</button>
      <div className='well'>{JSON.stringify(transaction, null, 4)}</div>
    </div>

  </div>
