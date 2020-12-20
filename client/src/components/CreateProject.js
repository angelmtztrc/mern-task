import { useState } from 'react';

const CreateProject = () => {
  // local state
  const [visible, setVisible] = useState(false);

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
        className={`mt-5 px-4 py-2 w-full border-b-2 border-gray-200 focus:border-gray-800 focus:outline-none transform transition-all duration-300 ease-in ${
          visible ? 'translate-x-0 opacity-100' : '-translate-x-96 opacity-0'
        }`}
      />
    </div>
  );
};

export default CreateProject;
