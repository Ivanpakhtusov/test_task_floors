import React, { useContext } from 'react';
import ApartmentItem from './ApartmentItem';
import stateContext from '../context';

function ApartmentsList() {
    const { state } = useContext(stateContext);
    return (
        <div style={{ display: 'flex' }}>
      {state.apartments.map((apartment) => (
        <ApartmentItem key={apartment.id} apartment={apartment} />
      ))}
    </div>
    );
}

export default ApartmentsList;