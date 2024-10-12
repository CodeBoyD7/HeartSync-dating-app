import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import { SyncLoader } from "react-spinners";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, loading } = useAuthStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const status = await login({ email, password });

    if (status) {
      setEmail("");
      setPassword("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 bg-white p-6 rounded-lg shadow-md max-w-sm mx-auto"
    >
      <h2 className="text-lg font-semibold text-gray-800 text-center mb-4">
        Login
      </h2>

      <div>
        <label
          htmlFor="email"
          className="block mb-1 text-xs font-medium text-gray-500"
        >
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          autoComplete="email"
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 text-black text-xs rounded-md focus:ring-red-500 focus:border-red-500 block w-full p-2"
          placeholder="Email"
          required
        />
      </div>

      <div>
        <label
          htmlFor="password"
          className="block mb-1 text-xs font-medium text-gray-500"
        >
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 text-black text-xs rounded-md focus:ring-red-500 focus:border-red-500 block w-full p-2"
          placeholder="Password"
          required
        />
      </div>

      <button
        disabled={loading}
        type="submit"
        className={`w-full text-white bg-purple-500 hover:bg-pink-500 transition-colors duration-300 border border-white hover:border-pink-600 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-md text-xs px-4 py-2 h-10 ${
          loading ? "cursor-not-allowed" : ""
        }`}
      >
        {loading ? (
          <SyncLoader color="#fff" size={8} speedMultiplier={0.75} />
        ) : (
          "Login"
        )}
      </button>
    </form>
  );
};

export default LoginForm;
