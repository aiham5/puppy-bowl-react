import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/players/:id">Single Player</Link>
      <Link to="/new-player/">New Player</Link>
    </>
  );
}
