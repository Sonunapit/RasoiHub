import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="mb-10 mt-0">
      <div className="flex justify-between items-center px-4 py-3">
        <h1 className="font-bold text-2xl md:text-3xl md:mt-1">
          <i className=" text-red-400 p-0.5 md:text-4xl ri-restaurant-line"></i>
          RasoiHub
        </h1>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </button>

        <div className="hidden md:flex gap-x-10 font-semibold  items-center">
          <NavLink className={(e) => (e.isActive ? "text-red-300" : "")} to="/">
            <i className=" text-red-400 p-1  ri-home-4-line"></i>
            Home
          </NavLink>

          <NavLink
            className={(e) => (e.isActive ? "text-red-300" : "")}
            to="/recipes"
          >
            <i className=" text-red-400 p-1 ri-bowl-line"></i>
            Recipes
          </NavLink>

          <NavLink
            className={(e) => (e.isActive ? "text-red-300" : "")}
            to="/about"
          >
            <i className=" text-red-400 p-1 ri-info-card-line"></i>
            About
          </NavLink>

          <NavLink
            className={(e) => (e.isActive ? "text-red-300" : "")}
            to="/fav"
          >
            <i className=" text-red-400 p-1 ri-hand-heart-line"></i>
            Favroite
          </NavLink>

          <NavLink
            className={(e) =>
              `px-4 py-2 bg-gray-900 rounded ${
                e.isActive ? "text-red-300" : ""
              }`
            }
            to="/create-recipe"
          >
            Create Recipe
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="flex flex-col gap-4 px-4  font-semibold md:hidden">
          <NavLink onClick={() => setMenuOpen(false)} to="/">
            Home
          </NavLink>

          <NavLink onClick={() => setMenuOpen(false)} to="/recipes">
            Recipes
          </NavLink>

          <NavLink onClick={() => setMenuOpen(false)} to="/about">
            About
          </NavLink>

          <NavLink onClick={() => setMenuOpen(false)} to="/fav">
            Favroite
          </NavLink>

          <NavLink
            onClick={() => setMenuOpen(false)}
            className="px-3 py-2 bg-gray-900 rounded"
            to="/create-recipe"
          >
            Create Recipe
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
