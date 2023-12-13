/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import login from "../../../public/animation/login.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const Login = () => {

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log(email,password);

  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Task manager | Login</title>
      </Helmet>
      <div>
        <h1 className="text-5xl text-center font-bold pt-7 pb-0">Login now!</h1>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Lottie animationData={login} loop={true}></Lottie>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmitLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
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
                  name="password"
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
              <p className="text-red-500">{"err"}</p>
              <div className="form-control mt-6">
                <button className="btn btn-info rounded-sm">Login</button>
              </div>
            </form>
            <div className="card-body">
              {/* <p className="my-5 text-center">Or connect with social media</p>
              <div>
                <div className="form-control mt-6"> */}
              {/* <button onClick={""} className="btn rounded-sm"> */}
              {/* <FaGoogle style={{ fontSize: "1.5rem" }} className="mr-3" /> */}
              {/* Sign in with Google */}
              {/* </button> */}
              {/* </div>
                <div className="form-control mt-6">
                  <button onClick={""} className="btn rounded-sm"> */}
              {/* <FaGithub style={{ fontSize: "1.5rem" }} className="mr-3" /> */}
              {/* Sign in with Gihub
                  </button>
                </div>
              </div> */}
              {/* <div className="flex mt-5">
                <hr className="w-1/2 mt-3.5" />
                <span className="mt-0">or</span>
                <hr className="w-1/2 mt-3.5" />
              </div> */}
              <p>
                {" "}
                <Link to="/signup" className="text-info ">
                  <p className="text-center justify-center">
                    Don't have an account?
                  </p>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
