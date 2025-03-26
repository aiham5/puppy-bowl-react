export default async function fetchPlayers() {
  try {
    const response = await fetch(
      "https://fsa-puppy-bowl.herokuapp.com/api/2502-PUPPIES/players"
    );
    const data = await response.json();
    return data.data?.players || [];
  } catch (error) {
    console.error("Error Fetch", error);
    return [];
  }
}

export async function fetchSinglePlayer(playerId) {
  try {
    const response = await fetch(
      `https://fsa-puppy-bowl.herokuapp.com/api/2502-PUPPIES/players/${playerId}`
    );
    const data = await response.json();
    return data.data?.player || null;
  } catch (error) {
    console.error("error", error);
    return null;
  }
}
