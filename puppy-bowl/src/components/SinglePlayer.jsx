import { useState, useEffect } from "react";
import { fetchSinglePlayer } from "../API";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function SinglePlayer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayer = async () => {
      const fetchedPlayer = await fetchSinglePlayer(id);
      setPlayer(fetchedPlayer);
    };
    fetchPlayer();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://fsa-puppy-bowl.herokuapp.com/api/2502-PUPPIES/players/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Player deleted successfully!");
        navigate("/");
      } else {
        console.error("Error deleting player");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };
  if (!player) return <p>Loading Player Details ...</p>;

  return (
    <>
      <h2>{player.name}</h2>
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>

      <button onClick={handleDelete}>Delete Player</button>
    </>
  );
}
