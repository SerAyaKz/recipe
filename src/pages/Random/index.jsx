import React, { useEffect, useState } from "react";
import "./styles.css";
import { Header, Footer, List, EmptyView } from "../../components/common";

const Random = () => {
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

  const [type_receipts, setTypeofDish] = useState([]);
  const [nations, setNation] = useState([]);
  const [randomList, setRandomList] = useState([]);

  const getRandomItems = (items) => {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 9);
  };
  const handleRandomClick = () => {
    setRandomList(getRandomItems(dataList));
  };

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
      setRandomList(getRandomItems(res));
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
      <button
        className="glow-on-hover"
        onClick={handleRandomClick}
        type="button"
      >
        Apply Sorting
      </button>
      <div className="home_list-wrap">
        {randomList ? (
          <List
            list={randomList}
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

export default Random;
