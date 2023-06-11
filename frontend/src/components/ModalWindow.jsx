import ReactModal from "react-modal";
import React from "react";

ReactModal.setAppElement("#root");

function Modal({ isOpen, handleClose, apartment }) {
  return (
    <ReactModal isOpen={isOpen} onRequestClose={handleClose}>
      <h2>Квартира {apartment.id}</h2>
      <img className="photo" src={apartment.layout_image} alt="apartment_img" />
      <p>Стоимость: {apartment.price}₽</p>
      <p>Этаж {apartment.floor}</p>
      <p>Количество комнат {apartment.rooms}</p>
      <p>Общая площадь {apartment.area_total}м²</p>
      <p>Площадь кухни {apartment.area_kitchen}м²</p>
      <p>Жилая площадь {apartment.area_live}м²</p>
      <button type="button" class="btn btn-danger" onClick={handleClose}>
        Закрыть
      </button>
    </ReactModal>
  );
}

export default Modal;
