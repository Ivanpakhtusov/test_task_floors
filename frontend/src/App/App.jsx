import { useEffect, useReducer } from "react";
import ApartmentsList from "../components/ApartmentsList";
import "./App.css";
import reducer from "../reducer";
import stateContext from '../context';

const initialState = {
  apartments: [],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getAparments = () => {
    fetch("/api/apartments")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "GET_APARTMENTS", payload: data }));
  };
  useEffect(() => {
    getAparments();
  }, []);
  return (
    <stateContext.Provider value={{ state, dispatch }}>
    <div className="App">
      <ApartmentsList />
    </div>
    </stateContext.Provider>
  );
}

export default App;
