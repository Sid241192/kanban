// KanbanBoard.js
import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../App";
import TicketColumn from "./TicketColumn";
import "./board.css";

const KanbanBoard = ({ tickets }) => {
  const [data, setData] = useState([]);
  const [filterBy, setFilterBy] = useState("status");
  const { state, dispatch } = useContext(AppContext);

  useEffect(() => {
    const result = filterKanbanData(
      tickets,
      state?.groupingSelected,
      state?.orderingSelected,
    );
    setData(result);
  }, [state?.groupingSelected]);

  const filterKanbanData = (tickets, filterBy, filterByorderingSelected) => {
    // First level of filtering by filterBy
    const filteredByFilter = tickets.filter((ticket) => ticket[filterBy]);

    // Grouping the filtered data by filterBy
    const uniqueDataByFilter = filteredByFilter.reduce((acc, ticket) => {
      const filterValue = ticket[filterBy];
      if (!acc[filterValue]) {
        acc[filterValue] = [];
      }
      acc[filterValue].push(ticket);
      return acc;
    }, {});

    // Second level of filtering by filterByorderingSelected on the filtered data
    const result = Object.keys(uniqueDataByFilter).map((key) => {
      const orderingFilteredData = uniqueDataByFilter[key].filter(
        (ticket) => ticket[filterByorderingSelected],
      );
      return {
        [filterBy]: key,
        [filterByorderingSelected]: orderingFilteredData.map(
          (ticket) => ticket[filterByorderingSelected],
        ),
        data: orderingFilteredData,
      };
    });

    return result;
  };

  return (
    <div className="kanban-container">
      {data.length > 0 &&
        data.map((item, index) => {
          return (
            <TicketColumn
              key={item.id}
              item={item}
              users={state?.userData?.users}
            />
          );
        })}
    </div>
  );
};

export default KanbanBoard;
