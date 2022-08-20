import React from "react";
import "./PlayerCart.css";

const PlayerCart = (props) => {
  const players = props.players;

  let totalSalary = players.reduce(
    (total, user) => total + Number(user.salary), 0);

  return (
    <div>
      <h5 className="player-select">Player Selected: {players.length}</h5>
      <h5 className="total-salary">Total Salary: ${totalSalary}</h5>
      {players.map((player) => {
        return (
          <div className="card mb-3">
            <div className="row g-5">
              <div className="col-md-4">
                <div>
                  <img src={player.image} className="player-img" alt="players" width="100%"/>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h4 className="card-title">Name: {player.name}</h4>
                  <br />
                  <p className="card-text">Salary: ${player.salary}</p>
                </div>
              </div>
            </div>
          </div>
        );
      }
      )}
    </div>
  );
};

export default PlayerCart;
