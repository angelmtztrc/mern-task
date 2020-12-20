import { useState } from 'react';

// components
import CreateProject from './CreateProject';
import ProjectsList from './ProjectsList';

const Sidebar = () => {
  const [visible, setVisible] = useState(false);

  return (
    <aside className="flex flex-col col-span-2 px-8 py-6 text-gray-800">
      <h1 className="text-center font-display text-4xl">
        <span className="font-extrabold">MERN</span>Task
      </h1>
      <CreateProject visible={visible} setVisible={setVisible} />
      <ProjectsList visible={visible} />
    </aside>
  );
};

export default Sidebar;
