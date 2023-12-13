import { useContext } from "react";
import { Helmet } from "react-helmet";
import { AuthContext } from "../..//Provider/AuthProvider";

const Registration = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmitSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("email", email, "pass", password);
    console.log(createUser);

    createUser(email, password)
      .then((res) => console.log(res.user))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <Helmet>
        <title>Task manager | SignUp</title>
      </Helmet>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Create your own account</h1>
          <p className="py-6">
            Already signed up, enter your details and start enjoying your task.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmitSignup} className="card-body">
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
              <button className="btn btn-info rounded-sm">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Registration;
