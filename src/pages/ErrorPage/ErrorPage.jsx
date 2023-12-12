import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const { error, status } = useRouteError();
  return (
    <section className="flex items-center h-screen p-16 text-gray-900">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <img src="../../../public/icons/title.png" alt="image" />
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-yellow-500">
            <span className="sr-only">Error</span>
            {status || 404}
          </h2>
          <p className="text-2xl font-semibold md:text-3xl text-red-800 mb-8">
            {error?.message}
          </p>
          <Link to="/" className="btn hover:bg-cyan-500 hover:text-white">
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
