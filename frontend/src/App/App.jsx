import { useEffect, useState } from "react";
import ApartmentsList from "../components/ApartmentsList";
import "./App.css";
import Pagination from "../components/Pagination";

function App() {
  const [apartments, setApartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [apartmentsPerPage] = useState(8);
  const [sortBy, setSortBy] = useState("default");
  const [sortOrder, setSortOrder] = useState("asc");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(999999999);

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

  const sortedApartments = apartments
    .filter(
      (apartment) => apartment.price >= minPrice && apartment.price <= maxPrice
    )
    .sort((a, b) => {
      let sortValue;
      if (sortBy === "default") {
        return a.id - b.id;
      } else if (sortBy === "price") {
        sortValue = a.price - b.price;
      } else if (sortBy === "area") {
        sortValue = a.area_total - b.area_total;
      } else if (sortBy === "rooms") {
        sortValue = a.rooms - b.rooms;
      }
      return sortOrder === "asc" ? sortValue : -sortValue;
    });

  const lastApartmentsIndex = currentPage * apartmentsPerPage;
  const firstApartmentsindex = lastApartmentsIndex - apartmentsPerPage;
  const currentApartment = sortedApartments.slice(
    firstApartmentsindex,
    lastApartmentsIndex
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-primary">Квартиры</h1>
      <div
        className="d-flex mb-3"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h5 className="text-primary">Сортировка</h5>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="default">По умолчанию</option>
            <option value="price">Цена</option>
            <option value="area">Площадь</option>
            <option value="rooms">Кол-во комнат</option>
          </select>
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">По возрастанию</option>
            <option value="desc">По убыванию</option>
          </select>
        </div>
        <h5 className="text-primary">Фильтрация по стоимости</h5>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            type="number"
            placeholder="Мин. стоимость"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
          />
          <input
            type="number"
            placeholder="Макс. стоимость"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
      </div>
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
