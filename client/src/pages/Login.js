import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="px-6 py-4 w-full max-w-sm bg-white rounded-lg shadow">
      <h1 className="text-center text-gray-800 font-display text-3xl font-extrabold">
        Sign In
      </h1>
      <form className="mt-5">
        <div className="mb-3 w-full">
          <input
            type="email"
            name="email"
            placeholder="Your email..."
            autoComplete="off"
            className="block px-4 py-2 w-full border-2 border-gray-300 focus:border-gray-800 rounded-lg focus:outline-none outline-none appearance-none transition-colors duration-300 ease-in"
          />
          <p className="mt-0 text-right text-red-400 text-sm italic">
            Insert a valid email
          </p>
        </div>
        <div className="mb-4 w-full">
          <input
            type="password"
            name="password"
            placeholder="Your password..."
            autoComplete="off"
            className="block px-4 py-2 w-full border-2 border-gray-300 focus:border-gray-800 rounded-lg focus:outline-none outline-none appearance-none transition-colors duration-300 ease-in"
          />
          <p className="mt-0 text-right text-red-400 text-sm italic">
            Password is required
          </p>
        </div>
        <button className="block px-4 py-2 w-full text-white font-bold bg-gray-800 hover:bg-gray-900 rounded-lg focus:outline-none transition-colors duration-300 ease-in">
          Sign In
        </button>
        <Link
          to="/authentication/register"
          className="inline-block mt-2 text-gray-700 hover:underline text-sm cursor-pointer"
        >
          Or Register
        </Link>
      </form>
    </div>
  );
};

export default Login;
