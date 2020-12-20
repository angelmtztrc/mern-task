// components
import Project from '../components/Project';
import NotProjectSelected from '../components/NotProjectSelected';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <Sidebar />

      <Project />
      {/* <NotProjectSelected /> */}
    </div>
  );
};

export default Dashboard;
