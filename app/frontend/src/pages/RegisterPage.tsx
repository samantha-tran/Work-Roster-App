import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { register, reset } from "../features/auth/AuthSlice";
import { AppDispatch } from "../app/store";
import "react-toastify/dist/ReactToastify.css";
import { UserType } from "../types/UserType";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const { user, isError, message, isLoading, isSuccess } = useSelector(
    (state: any) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && user) {
      navigate("/");
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
  });

  const { name, email, password1, password2 } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (password1 !== password2) {
      toast.error("Passwords do not match!");
    } else {
      const userData: UserType = {
        name,
        email,
        password: password1,
      };

      dispatch(register(userData));
    }
  };

  return (
    <div className="grid h-screen bg-base-200 place-items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Register</h2>
          <form onSubmit={onSubmit} className="form-control w-full max-w-xs">
            <label className="label mt-3">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={onChange}
              name="name"
              required
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label mt-3">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              required
              onChange={onChange}
              name="email"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label mt-3">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password1}
              required
              onChange={onChange}
              name="password1"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label mt-3">
              <span className="label-text">Re-type Password</span>
            </label>
            <input
              type="password"
              placeholder="Re-enter your password"
              value={password2}
              required
              onChange={onChange}
              name="password2"
              className="input input-bordered w-full max-w-xs"
            />
            <button type="submit" className="m-8 btn btn-primary">
              Register
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
