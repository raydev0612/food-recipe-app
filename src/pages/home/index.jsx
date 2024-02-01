import React from "react";
import { useContext } from "react";
import RecipeItem from "../../components/recipe-item";
import { GlobalContext } from "../../context";

export default function Home() {
  const { recipeList, loading } = useContext(GlobalContext);

  if (loading) {
    return <h1>Loading data ! Please wait</h1>;
  }

  return (
    <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
      {recipeList && recipeList.length > 0 ? (
        recipeList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-red-700 font-extrabold">
            Nada que mostrar. Busca otro item
          </p>
        </div>
      )}
    </div>
  );
}
