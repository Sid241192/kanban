import {
  useState,
  useEffect,
  Suspense,
  lazy,
  useReducer,
  createContext,
} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutLoader from "./components/layout/Loaders";

const Home = lazy(() => import("./pages/Home"));
export const AppContext = createContext();

// Initial state
const initialState = {
  userData: [],
  groupingSelected: "status",
  orderingSelected: "title",
  // Define your initial state properties here
};

// Reducer function
const reducer = (state, action) => {
  switch (action.type) {
    case "SET_INITAL_DATA":
      return {
        ...state,
        userData: action.payload,
      };
    case "SET_GROUPING_SELECTED_DROPDOWN":
      return {
        ...state,
        groupingSelected: action?.payload,
      };
    case "SET_ORDERING_SELECTED_DROPDOWN":
      return {
        ...state,
        orderingSelected: action?.payload,
      };

    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Suspense fallback={<LayoutLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
