import React from "react";

export const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`alert-${alert.type} alert`}>
        <i className="fas fa-info-circle"></i> {alert.message}
      </div>
    )
  );
};
