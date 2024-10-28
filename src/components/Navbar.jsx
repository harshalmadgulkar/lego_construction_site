import React from "react";

const Navbar = () => {
  return (
    <div className="sticky top-0 py-4 container h-10 mx-auto flex items-center text-center justify-between">
      <div>
        <img src="../../assets/rb_2149482025.png" alt="" className="h-20" />
      </div>
      <div className="flex space-x-8 items-center">
        <a href="#" className="text-lg font-bold">
          Projects
        </a>
        <a href="#" className="text-lg font-bold">
          Stories
        </a>
        <a href="#" className="text-lg font-bold">
          Career
        </a>
        <a href="#" className="text-lg font-bold">
          Contact
        </a>
        <a href="#" className="text-lg font-bold">
          About us
        </a>
      </div>
    </div>
  );
};

export default Navbar;
