import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <header>
        <div className="font-bold text-4xl p-6 pl-24 text-gray-900 bg-white tracking-tighter">
          <Link to={"/"}>
            <h1>Workout Tarcker</h1>
          </Link>
        </div>
      </header>
    </>
  );
}

export default NavBar;
