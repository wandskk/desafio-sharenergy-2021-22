import React from 'react';

const Statistic = ({ children, value, className }) => {
  return (
    <div className="col-lg col-4">
      <div className={className}>
        <div className="row">
          <div className="col-lg-6 col-6">{children}</div>
          <div className="col-lg-6 col-6 value">{value}</div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
