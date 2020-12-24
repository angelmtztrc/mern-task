import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ProjectsListItem = ({ project }) => {
  // object destructuring
  const { _id, title } = project;

  // access to the values of the store
  const { active } = useSelector(state => state.projects);

  return (
    <li
      className={`${
        active && active.id === _id ? 'border-gray-800' : ''
      } inline-block pl-2 text-gray-600 hover:text-gray-900 font-bold border-l-2 hover:border-gray-800 cursor-pointer transition-colors duration-300 ease-in`}
    >
      {title}
    </li>
  );
};

ProjectsListItem.propTypes = {
  project: PropTypes.object.isRequired
};

export default ProjectsListItem;
