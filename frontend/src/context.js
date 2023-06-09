import { createContext } from 'react';

const initialContextValue = {
  state: {
    apartments: [],
  },
  dispatch: () => {},
};

const stateContext = createContext(initialContextValue);
export default stateContext;
