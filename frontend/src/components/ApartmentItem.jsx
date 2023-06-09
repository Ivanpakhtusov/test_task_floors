import React from "react";

function ApartmentItem({apartment}) {
  return (
    <div>
      <h2>{apartment.area_total}</h2>
      <img style={{ maxWidth: "400px" }} src={apartment.layout_image} alt="apartment_img" />
      <p>{apartment.pos_on_floor}</p>
    </div>
  );
}

export default ApartmentItem;
