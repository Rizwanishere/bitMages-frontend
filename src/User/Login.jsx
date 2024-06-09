import axios from "axios";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";
import UserContext from "../context/UserContext";

function Login() {
  const [user, setUser] = useState({});
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { setLoggedin } = useContext(UserContext);

  const onInputChange = (evt) => {
    const newUser = { ...user, [evt.target.name]: evt.target.value };
    setUser(newUser);
  };

  const onLogin = async (evt) => {
    evt.preventDefault();
    try {
      const url = "https://cgc-nodejs.onrender.com/users/signin";
      const res = await axios.post(url, user);
      localStorage.setItem("token", res.data.token);
      navigate("/products");
      setLoggedin(true);
    } catch (error) {
      setError(true);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <form onSubmit={onLogin}>
        <div className="bg-white p-12 rounded shadow-lg">
          <ShouldRender when={error}>
            <Error msg="Invalid Username or Password" />
          </ShouldRender>
          <h1 className="font-semibold text-2xl mb-8">Login</h1>
          <div>
            <label>Username</label>
            <input
              name="email"
              type="text"
              className="block border border-gray-300 w-64 rounded m-1 p-1"
              onChange={onInputChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              name="password"
              type="password"
              className="block border border-gray-300 w-64 rounded m-1 p-1"
              onChange={onInputChange}
            />
          </div>
          <div>
            <button
              type="submit"
              className="focus:ring-2 focus:ring-gray-400 bg-primary text-white hover:bg-orange-600 rounded m-1 p-1 ml-24 mt-4"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
