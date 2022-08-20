import './App.css';
import { useEffect, useState } from 'react';
import data from './Components/fakeData/data.json'
import PlayerCart from './Components/Player_Cart/PlayerCart';
import Header from './Components/Header/Header';
import Players from './Components/Players/Players';

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    setUser(data);
    }, []);

  const [players, setPlayers] = useState([]);

  //Add & control player repetition 
  const handleAdPlayer = (player) => {
    if (players.some(playerr => playerr.name === player.name)) {
      alert('Player already added!')
    return;
    }
    else{
      setPlayers([...players, player]);
    }
    
  };

  //control player removal
  const handleRemovePlayer = (player) => {
    const newPlayers = players.filter((playerr) =>{
      return playerr.name !== player.name;
    });
    setPlayers(newPlayers);
  }

  return (
    <div className="App mb-5">
        <Header />
        <h4 className="total-player">Total Player: {data.length}</h4>
        <PlayerCart players={players} />
        {
          user.map((user) => <Players user={user} key={user.id} handleAdPlayer={handleAdPlayer} handleRemovePlayer={handleRemovePlayer} />)
        }
    </div>
  );
}

export default App;
