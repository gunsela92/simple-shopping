import React from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./notifications.css";

export const sendMessage = ({type, title, description}) => {
  const notificationTypes = ["info", "success", "warning", "error"];
  if (type && !notificationTypes.includes(type)) {
    type = "info"
  }
  displayMsg({type, title, description});
};

const displayMsg = ({type, title, description}) => {
  toast[type](<div>
    <span className="notifTitle">{title}</span>
    {description && (
        <span className="notifDesc">{description}</span>
    )}
  </div>)
}

const Alerts = () => {

  return (
      <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          pauseOnHover
          colored
      />
  )
}

export default Alerts;