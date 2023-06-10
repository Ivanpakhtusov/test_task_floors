import React from "react";
import ApartmentItem from "./ApartmentItem";

function ApartmentsList({ apartments }) {
  return (
    <div style={{ display: "flex" }}>
      {apartments.map((apartment) => (
        <ApartmentItem key={apartment.id} apartment={apartment} />
      ))}
    </div>
  );
}

export default ApartmentsList;
