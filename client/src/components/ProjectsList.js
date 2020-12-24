import { useSelector } from 'react-redux';
import ProjectsListItem from './ProjectsListItem';

const ProjectsList = ({ visible }) => {
  // access to the state values
  const { projects } = useSelector(state => state.projects);

  return (
    <div
      className={`mt-10 font-body transform transition-transform ease-in duration-300 ${
        !visible ? '-translate-y-16' : 'translate-y-0'
      }`}
    >
      <p className="text-gray-800 font-display font-extrabold uppercase">
        Projects
      </p>
      <ul className="flex flex-col mt-4 space-y-1">
        {projects.map(project => (
          <ProjectsListItem key={project._id} project={project} />
        ))}
      </ul>
    </div>
  );
};

export default ProjectsList;
