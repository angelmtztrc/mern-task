const ProjectsList = () => {
  return (
    <div className="mt-10 font-body">
      <p className="text-gray-800 font-display font-extrabold uppercase">
        Projects
      </p>
      <ul className="flex flex-col mt-4 space-y-1">
        <li className="inline-block pl-2 text-gray-600 hover:text-gray-900 font-bold border-l-2 border-gray-800 cursor-pointer transition-colors duration-300 ease-in">
          MERN Task
        </li>
        <li className="inline-block pl-2 text-gray-600 hover:text-gray-900 font-bold border-l-2 hover:border-gray-800 cursor-pointer transition-colors duration-300 ease-in">
          Jurassic World API
        </li>
        <li className="inline-block pl-2 text-gray-600 hover:text-gray-900 font-bold border-l-2 hover:border-gray-800 cursor-pointer transition-colors duration-300 ease-in">
          Patient Manager
        </li>
      </ul>
    </div>
  );
};

export default ProjectsList;
