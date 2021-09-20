import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

export const Alert = () => {
  // initialize context hook
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert-${alert.type} alert`}>
        <i className="fas fa-info-circle"></i> {alert.message}
      </div>
    )
  );
};
