import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import fetchPlayers from "../API";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchAllPlayers = async () => {
      const fetchedPlayers = await fetchPlayers();
      setPlayers(fetchedPlayers);
    };

    fetchAllPlayers();
  }, []);

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {filteredPlayers.length > 0 ? (
        filteredPlayers.map((player) => (
          <div key={player.id}>
            <h4>{player.name}</h4>
            <button onClick={() => navigate(`/players/${player.id}`)}>
              View Player
            </button>
          </div>
        ))
      ) : (
        <p>Not Found!</p>
      )}
    </>
  );
}
