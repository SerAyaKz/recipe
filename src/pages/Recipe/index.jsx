import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import { Header, Footer, List, EmptyView } from "../../components/common";
import { RecipePage } from "../../components/Recipe";

const Recipe = () => {
  let { recipe_id } = useParams();

  const instance = {
    baseURL: `https://unhatched-invoice.000webhostapp.com`,
  };
  const requests = {
    fetchTypes: `/type.txt`,
    fetchNations: `/nation.txt`,
    fetchReceipts: `/recipe.txt`,
    fetchIngredient: `/ingredient.txt`,
  };
  const [ingList, setIngList] = useState([]);
  const [type_receipts, setTypeofDish] = useState([]);
  const [nations, setNation] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    async function fetchTypes() {
      const data = await fetch(`${instance.baseURL}${requests.fetchTypes}`);
      const res = await data.json();
      setTypeofDish(res);
    }
    async function fetchNations() {
      const data = await fetch(`${instance.baseURL}${requests.fetchNations}`);
      const res = await data.json();
      setNation(res);
    }
    async function fetchReceipt() {
      const data = await fetch(`${instance.baseURL}${requests.fetchReceipts}`);
      const res = await data.json();
      setSelectedRecipe(
        res.find((recipe) => recipe.recipe_id === parseInt(recipe_id))
      );
    }
    async function fetchIngredient() {
      const data = await fetch(
        `${instance.baseURL}${requests.fetchIngredient}`
      );
      const res = await data.json();
      setIngList(res);
    }
    fetchIngredient();
    fetchReceipt();
    fetchNations();
    fetchTypes();
  }, []);

  return (
    <div>
      <Header />

      <div className="home_list-wrap">
        {selectedRecipe ? (
          <RecipePage
            list={selectedRecipe}
            type_receipts={type_receipts}
            nations={nations}
            ingList={ingList}
          />
        ) : (
          <EmptyView />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Recipe;
