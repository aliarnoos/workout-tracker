import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <div className="flex justify-center align-start">
      <form
        className="flex flex-col gap-1 items-start bg-white p-6 w-80 shadow-md rounded"
        onSubmit={handleSubmit}
      >
        <h3 className="text-xl font-black  my-2">Log in</h3>

        <label>Email:</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          className="h-8 mb-6 mt-1 border-2 border-gray-300 rounded	focus:outline-none w-full"
        />
        <label>Password:</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="h-8 mb-6 mt-1 border-2 border-gray-300 rounded	focus:outline-none w-full"
        />

        <button
          className="bg-green-500 p-2 text-white font-bold rounded disabled:opacity-75"
          disabled={isLoading}
        >
          Log in
        </button>
        {error && (
          <div className="text-red-600 bg-red-100 p-2  mt-4 border-2 border-red-600 rounded">
            {error}
          </div>
        )}
      </form>
    </div>
  );
};

export default Login;
