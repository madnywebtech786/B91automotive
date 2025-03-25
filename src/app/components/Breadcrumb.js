import React from "react";

const Breadcrumb = ({ name }) => {
  return (
    <div className="w-full pt-60 pb-32 text-center text-white text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-red-700 to-red-500 capitalize">
      {name}
    </div>
  );
};

export default Breadcrumb;
