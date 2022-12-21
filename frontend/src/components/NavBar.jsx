import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header>
        <div className="font-bold">
          <Link to={"/"}>
            <h1>Workout Tarcker</h1>
          </Link>
        </div>
      </header>
    </>
  );
}

export default NavBar;
