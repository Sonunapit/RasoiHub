import video from "../assets/foods.mp4";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import RecipeCard from "../components/RecipeCard";
import { Link } from "react-router-dom";
import About from "./About";

const Home = () => {
  const { data } = useContext(recipecontext);

  const renderrecipe = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return (
    <div>
      <div>
        <video
          src={video}
          autoPlay
          muted
          loop
          className="w-screen h-[50%] object-cover rounded-2xl "
        />
      </div>

      <div className=" p-4 mr-2 mt-2 ">
        <h1 className="text-2xl font-semibold p-3 md:text-6xl  ">
          Cooked with <span className="font-bold text-red-400">Love</span>,{" "}
          <br />
          Delivered with Care.
        </h1>
        <p className=" text-yellow-400  font-serif md:text-4xl">
          Discover authentic{" "}
          <span className="font-bold text-red-300"> homemade </span> food
          <i className=" text-blue-400 p-1 ri-bowl-line"></i> <br />
          made with love and delivered to your door.
        </p>
        <Link to={"/recipes"}>
          <button className="bg-blue-500 text-white py-2 px-2 rounded mr-3 md:mr-4 md:mt-4">
            Explore Recipes
          </button>
        </Link>
         
         <Link to={"/create-recipe"}>
        <button className="bg-gray-900 text-white py-2.5 px-2 rounded">
          Create Recipes
        </button>
        </Link>
      </div>

      <div className="bg-gray-800 min-h-screen p-6">
        <h1 className="text-2xl font-bold text-white mb-6 md:text-4xl ">
          🍽️ Popular Recipes
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {data.length > 0 ? renderrecipe : "No recipes found !"}
        </div>
      </div>

      <About />
      
    </div>
    
  );
};

export default Home;
