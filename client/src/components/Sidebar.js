import CreateProject from './CreateProject';

const Sidebar = () => {
  return (
    <aside className="flex flex-col col-span-2 px-8 py-6 text-gray-800">
      <h1 className="font-display text-center text-4xl">
        <span className="font-extrabold">MERN</span>Task
      </h1>

      <CreateProject />
    </aside>
  );
};

export default Sidebar;
