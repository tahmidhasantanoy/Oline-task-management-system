/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import login from "../../../public/animation/login.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import { Helmet } from "react-helmet";

const Login = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Task manager | Login</title>
      </Helmet>
      <div>
        <h1 className="text-5xl text-center font-bold pt-7 pb-0">Login now!</h1>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Lottie animationData={login} loop={true}></Lottie>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-cyan-500 text-black hover:text-white">
                  Login
                </button>
              </div>
              <p className="text-center text-cyan-400">
                <Link to={"/signup"}>Don't have an account?</Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
