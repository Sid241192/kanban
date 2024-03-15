/* eslint-disable react-refresh/only-export-components */
// import React from 'react'
import { useEffect, useState, useContext } from "react";
import AppLayout from "../components/layout/AppLayout";
import KanbanBoard from "../components/shared/KanbanBoard";
import { AppContext } from "../App";
import "./pages.css";

const Home = () => {
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment",
      );
      const data = await response.json();
      dispatch({ type: "SET_INITAL_DATA", payload: data });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="page-wrapper">
      {state?.userData?.tickets && (
        <KanbanBoard tickets={state?.userData?.tickets} />
      )}
    </div>
  );
};

export default AppLayout()(Home);
