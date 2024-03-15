// TicketColumn.js
import {
  faCircleHalfStroke,
  faDotCircle,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";
import { AppContext } from "../../App";
import TicketCard from "./TicketCard";
import "./board.css";
const TicketColumn = ({ item, users }) => {
  const { state, dispatch } = useContext(AppContext);
  const getPriorityClassName = (priority) => {
    switch (priority) {
      case "4":
        return "urgent";
      case "3":
        return "high";
      case "2":
        return "medium";
      case "1":
        return "low";
      default:
        return "no-priority";
    }
  };
  return (
    <div className="column-container">
      {/* Add icons here */}
      {item.status && (
        <div className="priority-heading">
          <div className="priority-content">
            {item.status === "Todo" && <FontAwesomeIcon icon={faDotCircle} />}
            {item.status === "In progress" && (
              <FontAwesomeIcon icon={faCircleHalfStroke} />
            )}
            {item.status === "Backlog" && <FontAwesomeIcon icon={faTasks} />}
            <span>{item.status}</span>
            <span>{item.data.length}</span>
          </div>
          <div className="priority-content">
            <span>+</span>
            <span>{"..."}</span>
          </div>
        </div>
      )}
      {item.userId && (
        <div className="priority-heading">
          <div className="priority-content">
            <div
              className={`status-circle ${
                users.find((user) => user.id === item.userId).available
                  ? "online"
                  : "offline"
              }`}
            ></div>
            <img
              alt="user"
              src="https://www.w3schools.com/howto/img_avatar.png"
            />
            <span>{users.find((user) => user.id === item.userId).name}</span>
            <span>{item.data.length}</span>
          </div>
          <div className="priority-content">
            <span>+</span>
            <span>{"..."}</span>
          </div>
        </div>
      )}
      {item.priority && (
        <div className="priority-heading">
          <div className="priority-content">
            <span>{getPriorityClassName(item.priority)}</span>
            <span>{item.priority}</span>
          </div>
          <div className="priority-content">
            <span>+</span>
            <span>{"..."}</span>
          </div>
        </div>
      )}

      {item.data.length &&
        item.data.map((i, index) => {
          return (
            <div className="ticket-container" key={i.id}>
              <TicketCard ticket={i} users={users} />
            </div>
          );
        })}
    </div>
  );
};

export default TicketColumn;
