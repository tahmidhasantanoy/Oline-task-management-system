import { Link } from "react-router-dom";

const Registration = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create your own account</h1>
          <p className="py-6">
            Already signed up, enter your details and start enjoying your task.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Full name</span>
              </label>
              <input
                type="email"
                placeholder="enter full name"
                className="input input-bordered"
                required
              />
            </div>
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
                Register
              </button>
            </div>
            <p className="text-center text-cyan-400">
              <Link to={"/login"}>
                Already have an account?{" "}
                <span className="underline text-red-600">login</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
