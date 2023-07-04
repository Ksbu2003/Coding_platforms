import React from 'react';
import '../styles/ccbox.css'

const CcBox = ({ data }) => {
const renderItems = (count) => {
    const items = [];
    for (let i = 0; i < count; i++) {
        items.push(<span>&#9733;</span>);
    }
    return items;
    };

  return (
    <div className="data-box">
    <div className='left-box'>
    <div className="data-row">
    <div className="data-key">Country Rank :</div>
    <div className="data-value">{data["country_rank"]}</div>
    </div>
    <div className="data-row">
    <div className="data-key">Global Rank :</div>
    <div className="data-value">{data["global_rank"]}</div>
    </div>
    <div className="data-row">
    <div className="data-key">Rating :</div>
    <div className="data-value">{data["rating"]}</div>
    </div>
    <div className="data-row">
    <div className="data-key">Stars :</div>
    <div className="data-value">
    {renderItems(data["stars"])}</div>
    </div>
      </div>
    </div>
  );
};

export default CcBox;
