import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen">
      <Sidebar />
      <div className="col-span-10 bg-gray-800">{/* PROJECT SCREEN */}</div>
    </div>
  );
};

export default Dashboard;
