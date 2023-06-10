import { useEffect, useState } from "react";
import ApartmentsList from "../components/ApartmentsList";
import "./App.css";
import Pagination from "../components/Pagination";

function App() {
  const [apartments, setApartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [apartmentsPerPage] = useState(8);

  useEffect(() => {
    fetch(`http://localhost:4000/api/apartments`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setApartments(data));
  }, []);

  const lastApartmentsIndex = currentPage * apartmentsPerPage;
  const firstApartmentsindex = lastApartmentsIndex - apartmentsPerPage;
  const currentApartment = apartments.slice(
    firstApartmentsindex,
    lastApartmentsIndex
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary"s>Квартиры</h1>
      <ApartmentsList apartments={currentApartment} />
      <Pagination
        apartmentsPerPage={apartmentsPerPage}
        totalApartments={apartments.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
