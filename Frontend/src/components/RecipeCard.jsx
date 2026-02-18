import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const { id, image, title, desc, chef } = recipe;

  return (
    <Link
      to={`/recipes/details/${id}`}
      className="group block bg-gray-900 rounded-2xl overflow-hidden shadow-lg 
      hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 
      border border-gray-700"
    >
      {/* Image */}
      <div className="overflow-hidden">
        <img
          className="w-full h-[200px] object-cover group-hover:scale-110 transition duration-500"
          src={image}
          alt={title}
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h2 className="text-lg font-semibold text-white group-hover:text-orange-400 transition">
          {title}
        </h2>

        {/* Chef */}
        <div className="flex items-center gap-2 text-sm">
          <span className="text-gray-400">👨‍🍳</span>
          <span className="text-gray-300 font-medium tracking-wide">
            {chef}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed">
          {desc.slice(0, 90)}...
          <span className="text-orange-400 font-medium ml-1 group-hover:underline">
            Read More
          </span>
        </p>
      </div>
    </Link>
  );
};

export default RecipeCard;