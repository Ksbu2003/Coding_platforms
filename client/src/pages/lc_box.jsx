import React from 'react';
import '../styles/databox.css'
import LcChart from './lc_chart';
const LcBox = ({ data }) => {
    console.log(data)
    return (
        <div className="data-box" style={{backgroundColor:"orange"}}>
        <div className='left-box'>
        <div className="data-row">
        <div className="data-key">Total Solved / Total Questions </div>
        <div className="data-value">{data["totalSolved"]}</div>
        &nbsp;&nbsp;&nbsp;   <b>of</b>&nbsp;    &nbsp;&nbsp;
        <div className="data-value">{data["totalQuestions"]}</div>
          </div>
        <div className="data-row">
        <div className="data-key">Easy Solved / Total Easy </div>
        <div className="data-value">{data["easySolved"]}</div>
        &nbsp;&nbsp;&nbsp;   <b>of</b>&nbsp;    &nbsp;&nbsp;
        <div className="data-value">{data["totalEasy"]}</div>
          </div>
              <div className="data-row">
            <div className="data-key">Medium Solved / Total Medium </div>
            <div className="data-value">{data["mediumSolved"]}</div>
            &nbsp;&nbsp;&nbsp;   <b>of</b>&nbsp;    &nbsp;&nbsp;
            <div className="data-value">{data["totalMedium"]}</div>
              </div>
              <div className="data-row">
            <div className="data-key">Hard Solved / Total Hard </div>
            <div className="data-value">{data["hardSolved"]}</div>
            &nbsp;&nbsp;&nbsp;   <b>of</b>&nbsp;    &nbsp;&nbsp;
            <div className="data-value">{data["totalHard"]}</div>
              </div>
              <div className="data-row">
              <div className="data-key">% of Total Solved</div>
              <div className="data-value">{Math.round(data["totalSolved"]*100/data["totalQuestions"])}</div>
                </div>
              <div className="data-row">
              <div className="data-key">% of Easy Solved</div>
              <div className="data-value">{Math.round(data["easySolved"]*100/data["totalEasy"])}</div>
                </div>
                <div className="data-row">
              <div className="data-key">% of Medium Solved</div>
              <div className="data-value">{Math.round(data["mediumSolved"]*100/data["totalMedium"])}</div>
                </div>
                <div className="data-row">
              <div className="data-key">% of Hard Solved</div>
              <div className="data-value">{Math.round(data["hardSolved"]*100/data["totalHard"])}</div>
                </div>
                <div className="data-row">
                <div className="data-key">% Acceptance Rate</div> 
                {(data["acceptanceRate"]>=50) &&  <div className="data-value" style={{backgroundColor:"green"}}>{data["acceptanceRate"]}</div>}
                {(data["acceptanceRate"]<50) &&  <div className="data-value" style={{backgroundColor:"red"}}>{data["acceptanceRate"]}</div>}
                  </div>
             </div>
            <div className='right-box'>
            <LcChart data={data}/>
            </div>
          </div>
      );
  };
  
export default LcBox;
