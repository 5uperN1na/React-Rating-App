import React from "react";
import Button from '../components/Button';

const Modal = ({ isOpen, onClose, rating }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Thank you for your feedback!</h2>
        <p>
          Rating = {rating} star{rating > 1 ? "s" : ""}
        </p>
        <Button className="close-btn" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default Modal;
