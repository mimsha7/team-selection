import React from "react";
import "./Players.css";
import { Button } from "react-bootstrap";

const Players = (props) => {
  const { name, image, salary } = props.user;
  return (
    <div className="players-info">
      <div>
        <img src={image} alt="user" width="300px"></img>
      </div>
      <div className="playerHandler">
        <br />
        <p>Player Name: {name}</p>
        <p>
          <small>Salary: ${salary}</small>
        </p>
        <Button onClick={() => props.handleAdPlayer(props.user)} variant="warning"><i className="fa-solid fa-plus"></i> Add Player</Button>
        <Button onClick={() => props.handleRemovePlayer(props.user)} variant="danger"> <i className="fa-solid fa-xmark"></i> Remove
                  </Button>
      </div>
    </div>
  );
};

export default Players;
