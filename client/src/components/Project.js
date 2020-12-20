const Project = () => {
  return (
    <main className="flex flex-col col-span-10 bg-gray-100">
      <header className="flex flex-col items-center h-80 font-display bg-gray-800">
        <div className="w-full max-w-xl text-center">
          <h1 className="mb-5 mt-20 text-white text-5xl font-bold">
            MERN Task
          </h1>
          <div className="relative w-full">
            <input
              type="text"
              className="block pr-10 px-4 py-2 w-full rounded-lg focus:outline-none shadow appearance-none"
              placeholder="Create a task..."
            />
            <button className="absolute right-0 top-0 mr-1 mt-1 p-1 bg-gray-800 rounded">
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>
      <div className="container grid flex-grow gap-12 grid-cols-3 -mt-16 mx-auto px-10">
        <div className="px-4 py-4 max-w-full h-auto bg-white rounded-lg shadow">
          <p className="text-center text-gray-800 font-body text-3xl font-bold">
            TODO
          </p>
          <ul>{/* TASKS LIST HERE */}</ul>
        </div>
        <div className="px-4 py-4 max-w-full h-auto bg-white rounded-lg shadow">
          <p className="text-center text-gray-800 font-body text-3xl font-bold">
            IN PROGRESS
          </p>
          <ul>{/* TASKS LIST HERE */}</ul>
        </div>
        <div className="px-4 py-4 max-w-full h-auto bg-white rounded-lg shadow">
          <p className="text-center text-gray-800 font-body text-3xl font-bold">
            COMPLETED
          </p>
          <ul>{/* TASKS LIST HERE */}</ul>
        </div>
      </div>
      <button
        type="button"
        className="flex items-center self-end mb-2 mr-2 mt-5 px-4 py-2 text-white font-body bg-gray-800 rounded-lg uppercase"
      >
        <span>Delete Project</span>
        <svg
          className="ml-2 w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </main>
  );
};

export default Project;
