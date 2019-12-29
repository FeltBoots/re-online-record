import React from 'react';

import './row.css';

const Row = ({ children }) => {
  const elements = children.map((e, idx) => {
    return (
      <div className="row-item" key={idx}>
        { e }
      </div>
    );
  });

  return (
    <div className="row row-cols">
      { elements }
    </div>
  );
};

export default Row;
