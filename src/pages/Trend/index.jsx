import React, { useEffect, useState } from "react";
import "./styles.css";
import { Header, Footer, List, EmptyView } from "../../components/common";

const Trend = () => {
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
  const [dataList, setDataList] = useState([]);
  const [trendList, setTrendList] = useState([]);

  const [type_receipts, setTypeofDish] = useState([]);
  const [nations, setNation] = useState([]);

  function getStartDate(period) {
    const now = new Date();
    switch (period) {
      case "Yearly":
        return new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
      case "Semi-Annually":
        return new Date(now.getFullYear(), now.getMonth() - 6, now.getDate());
      case "Quarterly":
        return new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
      case "Monthly":
        return new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
      case "Weekly":
        return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
      case "Daily":
        return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1);
      default:
        return now;
    }
  }
  function handleButtonClick(period) {
    const startDate = getStartDate(period);
    const filteredRecipes = dataList.filter(
      (recipe) => new Date(recipe.created_date) >= startDate
    );

    const sortedRecipes = filteredRecipes
      .sort((a, b) => b.recipe_view - a.recipe_view)
      .slice(0, 9);
    setTrendList(sortedRecipes);
  }
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
      setDataList(res);
      const sortedRecipes = res
        .sort((a, b) => b.recipe_view - a.recipe_view)
        .slice(0, 9);
      setTrendList(sortedRecipes);
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
      <div className="trend_button">
        <button
          class="glow-on-hover"
          onClick={() => handleButtonClick("Yearly")}
          type="button"
        >
          Yearly
        </button>
        <button
          onClick={() => handleButtonClick("Semi-Annually")}
          className="glow-on-hover"
        >
          Semi-Annually
        </button>
        <button
          onClick={() => handleButtonClick("Quarterly")}
          className="glow-on-hover"
        >
          Quarterly
        </button>
        <button
          onClick={() => handleButtonClick("Monthly")}
          className="glow-on-hover"
        >
          Monthly
        </button>
        <button
          onClick={() => handleButtonClick("Weekly")}
          className="glow-on-hover"
        >
          Weekly
        </button>
        <button
          onClick={() => handleButtonClick("Daily")}
          className="glow-on-hover"
        >
          Daily
        </button>
      </div>
      <div className="home_list-wrap">
        {trendList ? (
          <List
            list={trendList}
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

export default Trend;
