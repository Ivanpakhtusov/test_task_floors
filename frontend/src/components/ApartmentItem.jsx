import React, { useState } from "react";
import Modal from "./ModalWindow";

function ApartmentItem({ apartment }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpenModal = () => setIsOpen(true);
  const handleCloseModal = () => setIsOpen(false);
  return (
    <>
      <div className="card" style={{ margin: "5px" }}>
        <img src={apartment.layout_image} alt="apartment_img" />
        <div className="card-body">
          <p className="card-text">{apartment.price}₽</p>
          <p className="card-text">{apartment.area_total}м²</p>
          <p className="card-text">Количество комнат {apartment.rooms}</p>
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => handleOpenModal()}
          >
            Подробнее
          </button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        handleClose={handleCloseModal}
        apartment={apartment}
      />
    </>
  );
}

export default ApartmentItem;
