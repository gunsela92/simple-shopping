import React from 'react';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./notifications.css";

export const sendMessage = (notif) => {
  const notificationTypes = ["info", "success", "warning", "error"];
  if (!notif?.type && !notificationTypes.includes(notif?.type)) {
    notif.type = "info"
  }
  displayMsg(notif);
};

const displayMsg = (notif) => {
  toast[notif?.type](<div>
    <span className="notifTitle">{notif?.title}</span>
    {notif?.description && (
        <span className="notifDesc">{notif?.description}</span>
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