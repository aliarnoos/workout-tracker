import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function NavBar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const handleClick = () => {
    logout();
  };

  return (
    <>
      <header>
        <div className="font-bold text-4xl p-8 pl-24 text-gray-900 bg-white tracking-tighter flex justify-between align-center">
          <Link to={"/workout-tracker"}>
            <h1>Workout Tarcker</h1>
          </Link>
          <nav>
            {user && (
              <div className="text-lg p-4 pl-24 text-gray-900 bg-white tracking-tighter flex gap-6">
                <span>{user.email}</span>
                <button
                  onClick={handleClick}
                  className="border-2 rounded	text-green-500 border-green-500 p-1"
                >
                  Log out
                </button>
              </div>
            )}
            {!user && (
              <div className="text-lg p-4 pl-24 text-gray-900 bg-white tracking-tighter flex gap-6">
                <Link
                  to="/login"
                  className="border-2 rounded	text-green-500 border-green-500 p-1"
                >
                  Log in
                </Link>
                <Link
                  to="/signup"
                  className="border-2 rounded	text-white bg-green-500 border-green-500 p-1"
                >
                  Sign up
                </Link>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;
