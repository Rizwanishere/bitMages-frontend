import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";
import UserContext from "../context/UserContext";
import Loader from "../util/Loader";

function Login() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { setLoggedin } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const onInputChange = (evt) => {
    const newUser = { ...user, [evt.target.name]: evt.target.value };
    setUser(newUser);
  };

  const onLogin = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    setError(false);
    try {
      const url = "https://bitmages-backend.onrender.com/users/signin";
      const res = await axios.post(url, user);
      localStorage.setItem("token", res.data.token);
      navigate("/ai");
      setLoggedin(true);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center mt-4 rounded-md px-6 py-6 lg:px-8 border">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      {loading && <Loader />}

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={onLogin}>
          <ShouldRender when={error}>
            <Error msg="Invalid Username or Password" />
          </ShouldRender>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                onChange={onInputChange}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm p-1 font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                onChange={onInputChange}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:border hover:border-primary hover:bg-white hover:text-primary"
            >
              Sign in
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-500">
              Don't have an account?{" "}
              <a href="/signup" className="text-primary">
                Sign Up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
