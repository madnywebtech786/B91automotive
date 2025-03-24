import React from "react";

const Breadcrumb = ({ name }) => {
  return (
    <div className="w-full py-60 text-center text-white text-7xl font-semibold bg-gradient-to-r from-red-700 to-red-500">
      {name}
    </div>
  );
};

export default Breadcrumb;
