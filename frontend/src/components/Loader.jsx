import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="loader border-t-4 border-b-4 border-red-700 rounded-full w-16 h-16 animate-spin"></div>
    </div>
  );
};

export default Loader;
