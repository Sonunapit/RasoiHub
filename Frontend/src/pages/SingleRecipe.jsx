import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const { data, setdata } = useContext(recipecontext);
  const navigate = useNavigate();
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: recipe?.title,
      chef: recipe?.chef,
      image: recipe?.image,
      desc: recipe?.desc,
      inst: recipe?.inst,
      ingr: recipe?.ingr,
    },
  });

  const UpdateHandler = (recipe) => {
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };

    setdata(copydata);
    localStorage.setItem("recipes", JSON.stringify(copydata));
    toast.success("Recipe update !");
  };

  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != params.id);
    localStorage.setItem("recipes", JSON.stringify(filterdata));
    setdata(filterdata);
    toast.success("recipe deleted !");
    navigate("/recipes", { replace: true });
    
    const fav = JSON.parse(localStorage.getItem("fav") || "[]");
    const updatedFav = fav.filter((f) => f.id != params.id);
    localStorage.setItem("fav", JSON.stringify(updatedFav));
  };

  const labelClasses =
    "block text-[13px] font-medium text-gray-400 mb-2 tracking-wide uppercase";
  const inputClasses =
    "w-full px-4 py-3 bg-[#161618] border border-white/5 rounded-xl focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-300 text-gray-100 placeholder-gray-600 hover:border-white/10";

  const [favroite, setfavroite] = useState(
    JSON.parse(localStorage.getItem("fav")) || [],
  );

  const FavHandler = () => {
    let copyfav = [...favroite];
    copyfav.push(recipe);
    setfavroite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };

  const UnFavHandler = () => {
    const filterfav = favroite.filter((f) => f.id != recipe?.id);
    setfavroite(filterfav);
    localStorage.setItem("fav", JSON.stringify(filterfav));
  };

  return recipe ? (
    <div className="max-w-5xl mx-auto p-4">
      <div className="   flex flex-col md:flex-row gap-6">
        <div className="  relative md:w-1/2">
          <img
            className="w-full h-60 md:h-80 object-cover rounded-lg outline-2 hover:scale-95 "
            src={recipe.image}
            alt=""
          />
          <h1 className="text-2xl  md:text-3xl font-bold mt-4">
            {recipe.title}
          </h1>

          <span className="mr-7 items-end ">
            {favroite.find((f) => f.id == recipe?.id) ? (
              <i
                onClick={UnFavHandler}
                className=" absolute text-4xl md:text-6xl  text-red-500 md:mt-2   ri-heart-fill "
              ></i>
            ) : (
              <i
                onClick={FavHandler}
                className="   absolute text-4xl md:text-6xl  text-red-500 md:mt-2  ri-heart-line "
              ></i>
            )}
          </span>
        </div>

        <hr />
        <div className="md:w-1/2">
          <form onSubmit={handleSubmit(UpdateHandler)} flex flex-col gap-4>
            <div className="group">
              <label className={labelClasses}>Cover Image URL</label>
              <div className="relative">
                <input
                  className={inputClasses}
                  {...register("image", {
                    required: "A visual reference is required",
                  })}
                  type="url"
                  placeholder="Please a give image link URL ..."
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gao-8">
              <div>
                <label className={labelClasses}>Recipe Name</label>
                <input
                  className={inputClasses}
                  type="text"
                  {...register("title", {
                    required: "Recipe name is required",
                  })}
                  placeholder="Smoked salmon pasta..."
                />
              </div>

              <div>
                <label className={labelClasses}> Chef</label>
                <input
                  className={inputClasses}
                  {...register("chef")}
                  type="text"
                  placeholder="Master Ched"
                />
              </div>
            </div>
            <div>
              <label className={labelClasses}> Category</label>
              <select
                className={`${inputClasses} appearcence-none cursor-pointer`}
                {...register("category")}
              >
                <option value="breakfast">Morning Breakfast</option>
                <option value="lunch">Midday Lunch</option>
                <option value="supper">Light supper</option>
                <option value="dinner">Main Dinner</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>Description</label>
              <textarea
                className={`${inputClasses} h-28 resize-none leading-relaxed`}
                {...register("desc")}
                placeholder="Write a brief intro about the origins or flavors.."
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className={labelClasses}>Ingredients List</label>
                <textarea
                  className={`${inputClasses} h-40 resize-none leading-relaxed text-sm`}
                  {...register("ingr")}
                  placeholder="• 250g Pasta&#10;• 2 cups Cream..."
                ></textarea>
                <p className="text-[11px] text-gray-600 mt-2 font-medium">
                  Tip: Use bullet points for readability
                </p>
              </div>
            </div>

            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-4 px-10 rounded-2xl shadow-xl shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center gap-3"
            >
              <span>Update Recipe</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </button>

            <button
              onClick={DeleteHandler}
              className="bg-red-500 hover:bg-red-500 mt-2  text-white font-bold py-4 px-10 rounded-2xl shadow-xl shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center gap-3"
            >
              <span>Delete Recipe</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 5l7 7-7 7M5 5l7 7-7 7"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    "loadding..."
  );
};

export default SingleRecipe;
