import PropTypes from 'prop-types';

const CreateProject = ({ visible, setVisible }) => {
  // handle visible property of input
  const handleVisible = () => {
    setVisible(!visible);
  };

  return (
    <div className="w-full">
      <button
        onClick={handleVisible}
        type="button"
        className="block mt-10 px-6 py-3 w-full text-white font-medium bg-gray-800 hover:bg-gray-900 rounded-lg focus:outline-none transition-colors duration-300 ease-in"
      >
        Create Project
      </button>
      <input
        type="text"
        placeholder="Name of the project..."
        className={`mt-5 px-4 py-2 w-full border-b-2 border-gray-200 focus:border-gray-800 outline-none focus:outline-none transform transition-all duration-300 ease-in appearance-none ${
          visible ? 'translate-x-0' : '-translate-x-96'
        }`}
      />
    </div>
  );
};

CreateProject.propTypes = {
  visible: PropTypes.bool.isRequired,
  setVisible: PropTypes.func.isRequired
};

export default CreateProject;
