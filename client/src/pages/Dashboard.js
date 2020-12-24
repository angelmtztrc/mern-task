import { useSelector } from 'react-redux';

// components
import Project from '../components/Project';
import NotProjectSelected from '../components/NotProjectSelected';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  const { active } = useSelector(state => state.projects);

  return (
    <div className="grid grid-cols-12 min-h-screen">
      <Sidebar />

      {active ? <Project /> : <NotProjectSelected />}
    </div>
  );
};

export default Dashboard;
