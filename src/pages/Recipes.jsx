import { useContext } from "react";
import { recipecontext} from "../context/RecipeContext"
import RecipeCard from "../components/RecipeCard";
const Recipes = () => {
  const {data} = useContext(recipecontext);
 
  const renderrecipes = data.map((recipe) => (
    <RecipeCard key={recipe.id} recipe={recipe} />
  ));
  return <div className="flex flex-wrap">{renderrecipes}</div>
}

export default Recipes;