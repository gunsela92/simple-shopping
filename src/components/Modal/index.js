import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import "./modal.css";

const Modal = ({ open, close, title, size, saveFunc, children}) => {

  const saveModal = () => {
    if (saveFunc) {
      saveFunc()
    }
    close()
  }

  return (
    <div className="modalBackdrop" hidden={!open}>
      <div className={`modalContainer ${size}`} hidden={!open}>
        <div className="modalTitle">
          {title}
          <div className="modalCloseWrapper" onClick={() => close()}>
            <FontAwesomeIcon icon={faTimes} className="modal-Close-Icon"/>
          </div>
        </div>
        <div className="modalInner">
          {children}
          <button className="modalBtn" onClick={saveModal}>
              ONAYLA
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  title: PropTypes.any.isRequired,
  children: PropTypes.any,
  size: PropTypes.string,
  saveFunc: PropTypes.func
};

Modal.defaultProps = {
  size: "medium",
  saveFunc: undefined,
}

export default Modal;
