const Discussions = () => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Discussions</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          New Discussion
        </button>
      </div>
      <div className="flex flex-col mt-4">
        <div className="flex items-center justify-between bg-gray-200 p-2">
          <h1 className="text-xl">Discussion Title</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            View
          </button>
        </div>
        <div className="flex items-center justify-between bg-gray-200 p-2">
          <h1 className="text-xl">Discussion Title</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            View
          </button>
        </div>
        <div className="flex items-center justify-between bg-gray-200 p-2">
          <h1 className="text-xl">Discussion Title</h1>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discussions;
