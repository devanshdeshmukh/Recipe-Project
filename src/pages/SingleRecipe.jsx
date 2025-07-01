import { useContext } from "react"
import { recipecontext } from "../context/RecipeContext"
import { useParams } from "react-router-dom";

const SingleRecipe = () => {
  const {data} =  useContext(recipecontext);
  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);
  console.log(recipe);
  return recipe ? (
    <div className="w-full flex">
      <div className="left w-1/2 p-2">
           <h1 className="text-5xl font-black">{recipe.title}</h1>
           <img className="h-[20vh]" src={recipe.image} alt="" />
      </div>

      <div className="right w-1/2 p-2"></div>
     
    </div>
  ) : ( 
    "Loading..."
  );
}

export default SingleRecipe