import React from 'react';
import '../styles/databox.css'
import PieChart from './piechart';
const DataBox = ({ data }) => {
  return (
    <div className="data-box1">
    <div className='left-box'>
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="data-row">
          <div className="data-key">{key}:</div>
          <div className="data-value">{value}</div>
        </div>
      ))}
      </div>
      <div className='right-box'>
      <PieChart data={data}/>
      </div>
    </div>
  );
};

export default DataBox;
