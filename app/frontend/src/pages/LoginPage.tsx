import React, { useState, useEffect } from "react";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../features/auth/AuthSlice";
import { AppDispatch } from "../app/store";
import { UserType } from "../types/UserType";

const LoginPage = () => {
  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();

  const { user, isLoading, isSuccess } = useSelector((state: any) => state.auth);

  const { email, password } = loginDetails;

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const userData: UserType = {
      email,
      password,
    };
    dispatch(login(userData))
      .unwrap()
      .then((user) => {
        navigate("/rosters");
      })
      .catch(toast.error);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginDetails({
      ...loginDetails,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="grid h-screen bg-base-200 place-items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Login</h2>
          <form onSubmit={onSubmit} className="form-control w-full max-w-xs">
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
              className="input bg-white input-bordered w-full max-w-xs"
            />
            <label className="label mt-3">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              required
              onChange={onChange}
              name="password"
              className="input bg-white input-bordered w-full max-w-xs"
            />
            <a className="text-right my-2" href="/register">
              Register here
            </a>
            <button type="submit" className="m-8 btn btn-primary">
              Login
            </button>
          </form>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};
/* <div className="grid h-screen bg-base-200 place-items-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Login</h2>
           <div className="card-actions justify-end">
            <button
              onClick={() => signInWithGoogle()}
              className={`btn btn-primary ${
                authorising ? "bg-red-100" : "bg-pink-200"
              }`}
            >
              Sign In With Google
            </button>
          </div> 
        </div>
            </div> */

export default LoginPage;
