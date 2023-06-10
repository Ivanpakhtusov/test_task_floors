import React from "react";

function ApartmentItem({ apartment }) {
  return (
    <div className="card" >
      <img src={apartment.layout_image} alt="apartment_img" />
      <div className="card-body">
        <p className="card-text">{apartment.price} Рублей</p>
        <p className="card-text">{apartment.area_total}м²</p>
        <p className="card-text">Колчиество комнат{apartment.rooms}</p>
      </div>
    </div>
  );
}

export default ApartmentItem;
