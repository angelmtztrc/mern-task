import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';

// actions
import { createProjectAction } from '../redux/actions/ProjectsActions';

const CreateProject = ({ visible, setVisible }) => {
  const dispatch = useDispatch();

  // handle visible property of input
  const handleVisible = () => {
    setVisible(!visible);
  };

  const formik = useFormik({
    initialValues: {
      title: ''
    },
    validationSchema: Yup.object({
      title: Yup.string().required('Title is required')
    }),
    onSubmit: values => {
      dispatch(createProjectAction(values));
      // formik.resetForm();
    }
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full">
      <button
        onClick={handleVisible}
        type="button"
        className="block mt-10 px-6 py-3 w-full text-white font-medium bg-gray-800 hover:bg-gray-900 rounded-lg focus:outline-none transition-colors duration-300 ease-in"
      >
        Create Project
      </button>
      <input
        value={formik.values.title}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        type="text"
        name="title"
        autoComplete="off"
        placeholder="Name of the project..."
        className={`mt-5 px-4 py-2 w-full border-b-2 border-gray-200 focus:border-gray-800 outline-none focus:outline-none transform transition-all duration-300 ease-in appearance-none ${
          visible ? 'translate-x-0' : '-translate-x-96'
        } ${
          formik.touched.title && formik.errors.title
            ? 'border-red-500 focus:border-red-500'
            : ''
        }`}
      />
    </form>
  );
};

CreateProject.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired
};

export default CreateProject;
