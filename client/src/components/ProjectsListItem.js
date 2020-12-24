import PropTypes from 'prop-types';

const ProjectsListItem = ({ project }) => {
  return (
    <li className="inline-block pl-2 text-gray-600 hover:text-gray-900 font-bold border-l-2 border-gray-800 cursor-pointer transition-colors duration-300 ease-in">
      MERN Task
    </li>
  );
};

ProjectsListItem.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectsListItem;
