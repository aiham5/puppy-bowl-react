import { useState } from "react";

export default function NewPlayerForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const playerData = {
      name: name,
      breed: breed,
      status: status,
    };

    try {
      const response = await fetch(
        "https://fsa-puppy-bowl.herokuapp.com/api/2502-PUPPIES/players",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(playerData),
        }
      );

      const result = await response.json();
      if (response.ok) {
        console.log("Player created:", result);
        setName("");
        setBreed("");
        setStatus("");
      } else {
        console.error("Error creating player", result);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Player</h2>
      <label>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        <input
          type="text"
          placeholder="Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="">Select Status</option>
          <option value="field">Field</option>
          <option value="bench">Bench</option>
        </select>
      </label>
      <br />
      <button type="submit">Create Player</button>
    </form>
  );
}
