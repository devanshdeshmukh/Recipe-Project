import { useContext } from "react"
import { recipecontext } from "../context/RecipeContext"
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";


const SingleRecipe = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const { register, handleSubmit, reset } = useForm();

  const SubmitHandler = (recipe) => { 
    const index = data.findIndex((recipe) => params.id == recipe.id);
    const copydata = [...data];
    copydata[index] = {...copydata[index], ...recipe};
    setdata(copydata);
    toast.success("Recipe updated!");
    
  };

  const params = useParams();
  const recipe = data.find((recipe) => params.id == recipe.id);

  return recipe ? (
    <div className="w-full flex">
      <div className="left w-1/2 p-2">
        <h1 className="text-5xl font-black">{recipe.title}</h1>
        <img className="h-[20vh]" src={recipe.image} alt="" />
      </div>

      <form className="w-1/2 p-2" onSubmit={handleSubmit(SubmitHandler)}>
        <input
          className="block border-b outline-0 p-2"
          {...register("image")}
          value={recipe.image}
          type="url"
          placeholder="Enter Image url"
        />
        <small className="text-red-400">
          This is how the erroe shown
        </small>

        <input
          className="block border-b outline-0 p-2"
          {...register("title")}
          value={recipe.title}
          type="text"
          placeholder="Recipe Title"
        />

        <input
          className="block border-b outline-0 p-2"
          {...register("chef")}
          value={recipe.chef}
          type="text"
          placeholder="Chef Name "
        />

        <textarea
          value={recipe.desc}
          className="block border-b outline-0 p-2"
          {...register("desc")}
          placeholder="//Start from here">
        </textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("ingr")}
          placeholder="//write ingredients seperated by comma">
        </textarea>

        <textarea
          className="block border-b outline-0 p-2"
          {...register("inst")}
          placeholder="//write instructions seperated by comma">
        </textarea>

        <select
          value={recipe.category}
          className="block border-b outline-0 p-2  text-zinc-400 bg-orange-800 "
          {...register("category")}>

          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button className="mt-5 block bg-blue-900 px-4 py-2 rounded" >
          Update Recipe
        </button>
        <button className="mt-5 block bg-red-900 px-4 py-2 rounded" >
          Delete Recipe
        </button>
      </form>

    </div>
  ) : (
    "Loading..."
  );
}

export default SingleRecipe