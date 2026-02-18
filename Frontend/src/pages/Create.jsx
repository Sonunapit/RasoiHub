import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { nanoid } from "nanoid";
import { useContext } from "react";
import { recipecontext } from "../context/RecipeContext";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();
  const { data, setdata } = useContext(recipecontext);

  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data]
    copydata.push(recipe);

    setdata(copydata);

    localStorage.setItem("recipes",JSON.stringify(copydata))

    toast.success("New recipe created !");
    reset();
    navigate("/recipes");
    
  };
  const inputClasses = "w-full px-4 py-3 bg-[#161618] border border-white/5 rounded-xl focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all duration-300 text-gray-100 placeholder-gray-600 hover:border-white/10";
  const labelClasses = "block text-[13px] font-medium text-gray-400 mb-2 tracking-wide uppercase";

  return (

     <div>
      <div className="max-w-3xl mx-auto"></div>
      <div className="bg-[#101828] rounded-3xl shadow-2xl overflow-hidden border border-white/[0.03]">
          {/* Header with Glassmorphism Effect */}
          <div className="px-10 py-10 border-b border-white/[0.03] bg-gradient-to-b from-white/[0.02] to-transparent">
            <h2 className="text-3xl font-bold text-white tracking-tight">Add New Recipe</h2>
            <p className="text-gray-500 mt-2 text-lg">Enter the details of your culinary creation.</p>
          </div>
    
    <form onSubmit={handleSubmit(SubmitHandler)} className="p-10 space-y-8">
            
            {/* Featured Image Section */}
            <div className="group">
              <label className={labelClasses}>Cover Image URL</label>
              <div className="relative">
                <input
                  className={inputClasses}
                  {...register("image", { required: "A visual reference is required" })}
                  type="url"
                  placeholder="Paste a high-resolution image link..."
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 group-focus-within:text-indigo-500 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
              
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Title */}
              <div>
                <label className={labelClasses}>Recipe Name</label>
                <input
                  className={inputClasses}
                  {...register("title", { required: "Recipe name is required" })}
                  type="text"
                  placeholder="Smoked Salmon Pasta..."
                />
                
              </div>

              {/* Chef */}
              <div>
                <label className={labelClasses}>Chef / Contributor</label>
                <input
                  className={inputClasses}
                  {...register("chef")}
                  type="text"
                  placeholder="Master Chef Gordon"
                />
              </div>
            </div>

            {/* Category selection with custom styling */}
            <div>
              <label className={labelClasses}>Course Category</label>
              <select
                className={`${inputClasses} appearance-none cursor-pointer`}
                {...register("category")}
              >
                <option value="breakfast">Morning Breakfast</option>
                <option value="lunch">Midday Lunch</option>
                <option value="supper">Light Supper</option>
                <option value="dinner">Main Dinner</option>
              </select>
            </div>

            {/* Description */}
            <div>
              <label className={labelClasses}>The Story (Description)</label>
              <textarea
                className={`${inputClasses} h-28 resize-none leading-relaxed`}
                {...register("desc")}
                placeholder="Write a brief intro about the origins or flavors..."
              ></textarea>
            </div>

            {/* Split layout for technical details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className={labelClasses}>Ingredients List</label>
                <textarea
                  className={`${inputClasses} h-40 resize-none leading-relaxed text-sm`}
                  {...register("ingr")}
                  placeholder="• 250g Pasta&#10;• 2 cups Cream..."
                ></textarea>
                <p className="text-[11px] text-gray-600 mt-2 font-medium">Tip: Use bullet points for readability</p>
              </div>

              
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-between pt-8 mt-4 border-t border-white/[0.03]">
              <button 
                type="button"
                onClick={() => navigate("/recipes")}
                className="text-gray-500 hover:text-white font-semibold transition-colors text-sm"
              >
                Discard Draft
              </button>
              
              <button 
                type="submit"
                className=" bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-2 px-3 rounded-2xl shadow-xl shadow-indigo-500/10 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 flex items-center gap-3"
              >
                <span>Publish Recipe</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </form>
    </div>
    </div>
  );
};

export default Create;