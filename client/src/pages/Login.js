import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

// actions
import { authenticateAction } from '../redux/actions/AuthActions';

const Login = () => {
  // dispatch
  const dispatch = useDispatch();

  // handle the data of the form
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Insert a valid email')
        .required('Email is required'),
      password: Yup.string()
        .required('Password is required')
        .min(6, `The password must have at least 6 characters`)
    }),
    onSubmit: values => {
      dispatch(authenticateAction(values));
    }
  });

  return (
    <div className="px-6 py-4 w-full max-w-sm bg-white rounded-lg shadow">
      <h1 className="text-center text-gray-800 font-display text-3xl font-extrabold">
        Sign In
      </h1>
      <form onSubmit={formik.handleSubmit} className="mt-5">
        <div className="mb-3 w-full">
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="email"
            name="email"
            placeholder="Your email..."
            autoComplete="off"
            className={`${
              formik.touched.email && formik.errors.email
                ? 'border-red-500'
                : ''
            } block px-4 py-2 w-full border-2 border-gray-300 focus:border-gray-800 rounded-lg focus:outline-none outline-none appearance-none transition-colors duration-300 ease-in`}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="mt-0 text-right text-red-400 text-sm italic">
              {formik.errors.email}
            </p>
          ) : null}
        </div>
        <div className="mb-4 w-full">
          <input
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="password"
            name="password"
            placeholder="Your password..."
            autoComplete="off"
            className={`${
              formik.touched.password && formik.errors.password
                ? 'border-red-500'
                : ''
            } block px-4 py-2 w-full border-2 border-gray-300 focus:border-gray-800 rounded-lg focus:outline-none outline-none appearance-none transition-colors duration-300 ease-in`}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className="mt-0 text-right text-red-400 text-sm italic">
              {formik.errors.password}
            </p>
          ) : null}
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
