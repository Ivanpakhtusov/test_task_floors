import React from "react";
import ApartmentItem from "./ApartmentItem";

function ApartmentsList({ apartments, handleOpenModal }) {
  
  return (
    <div style={{ display: "flex" }}>
      {apartments.map((apartment) => (
        <ApartmentItem
          key={apartment.id}
          apartment={apartment}
          handleOpenModal={handleOpenModal}
        />
      ))}
    </div>
  );
}

export default ApartmentsList;
