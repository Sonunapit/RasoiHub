import RecipeCard from "../components/RecipeCard";

const Fav = () => {
  const favroite = JSON.parse(localStorage.getItem("fav") || "[]");

  const renderrecipes = favroite.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));

  return (
    <div className="flex flex-wrap gap-2">
      {favroite.length > 0 ? renderrecipes : "No favroite found !"}
    </div>
  );
};

export default Fav;