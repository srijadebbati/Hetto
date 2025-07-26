import React from 'react';

const DashboardCard = ({ title, count }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card text-center shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text display-6">{count}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
