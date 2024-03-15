// TicketCard.js
import React from "react";
import "./board.css";

const TicketCard = ({ ticket, users }) => {
  return (
    <div className={`ticket-card`}>
      <div className="ticket-header">
        <div className="ticket-title">
          <b>{ticket.id}</b>
        </div>
        <div className="ticket-priority">
          <div
            className={`status-circle ${
              users.find((user) => user.id === ticket.userId).available
                ? "online"
                : "offline"
            }`}
          ></div>
          <img
            alt="user"
            src="https://www.w3schools.com/howto/img_avatar.png"
          />
        </div>
      </div>
      <div className="ticket-description">
        <b>{ticket.title}</b>
      </div>
      <div className="ticket-footer">
        <div className="ticket-status">{"..."}</div>
        <div className="ticket-assignee">{ticket.tag[0]}</div>
      </div>
    </div>
  );
};

export default TicketCard;
