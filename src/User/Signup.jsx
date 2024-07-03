import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Error from "../util/Error";
import ShouldRender from "../util/ShouldRender";

function Signup() {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState(false);
  const [submitErrorMessage, setSubmitErrorMessage] = useState("");
  const navigate = useNavigate();

  const validateInput = (name, value) => {
    let errorMsg = "";

    if (name === "firstName" || name === "lastName") {
      if (!value) {
        errorMsg = "This field is required";
      } else if (value.length < 3) {
        errorMsg = "Must be at least 3 characters";
      }
    }

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!value) {
        errorMsg = "This field is required";
      } else if (!emailPattern.test(value)) {
        errorMsg = "Invalid email address";
      }
    }

    if (name === "password") {
      if (!value) {
        errorMsg = "This field is required";
      } else if (value.length < 6) {
        errorMsg = "Must be at least 6 characters";
      }
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    setUser({ ...user, [name]: value });
    validateInput(name, value);
  };

  const onSignup = async (evt) => {
    evt.preventDefault();
    try {
      const url = "https://bitmages-backend.onrender.com/users/signup";
      await axios.post(url, user);
      navigate("/signin");
    } catch (error) {
      setSubmitError(true);
      setSubmitErrorMessage(error.response?.data || "Internal Server Error");
    }
  };

  const isFormValid = () => {
    return (
      Object.values(errors).every((error) => !error) &&
      Object.values(user).every((value) => value)
    );
  };

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 mt-4 lg:px-8 border rounded-md ">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Create Your Account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
        <ShouldRender when={submitError}>
          <Error msg={submitErrorMessage} />
        </ShouldRender>

        <form className="space-y-6" onSubmit={onSignup}>
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name
            </label>
            <div className="mt-2">
              <input
                id="firstName"
                name="firstName"
                type="text"
                autoComplete="given-name"
                required
                className="block w-full p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                value={user.firstName}
                onChange={onInputChange}
              />
              <ShouldRender when={errors.firstName}>
                <div className="text-sm text-red-500 mt-1">
                  {errors.firstName}
                </div>
              </ShouldRender>
            </div>
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name
            </label>
            <div className="mt-2">
              <input
                id="lastName"
                name="lastName"
                type="text"
                autoComplete="family-name"
                required
                className="block w-full p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus: sm:text-sm sm:leading-6"
                value={user.lastName}
                onChange={onInputChange}
              />
              <ShouldRender when={errors.lastName}>
                <div className="text-sm text-red-500 mt-1">
                  {errors.lastName}
                </div>
              </ShouldRender>
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus: sm:text-sm sm:leading-6"
                value={user.email}
                onChange={onInputChange}
              />
              <ShouldRender when={errors.email}>
                <div className="text-sm text-red-500 mt-1">{errors.email}</div>
              </ShouldRender>
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                className="block w-full p-1 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus: sm:text-sm sm:leading-6"
                value={user.password}
                onChange={onInputChange}
              />
              <ShouldRender when={errors.password}>
                <div className="text-sm text-red-500 mt-1">
                  {errors.password}
                </div>
              </ShouldRender>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm"
              disabled={!isFormValid()}
            >
              Sign Up
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-md text-gray-500">
          Already have an account?{" "}
          <Link to="/signin" className="font text-primary">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
