import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const RecipePage = ({ list, type_receipts, nations, ingList }) => (
  <div className="recipe-card">
    <Link to={`/receipt/${list.recept_id}`} className="recipe-title">
      {list.recipe_name}
    </Link>

    <span className="recipe-rating">⭐{list.rating}</span>

    <p className="recipe-info">
      <span>
        {type_receipts.find((x) => x.type_id === list.type_id)?.type_name},
        {nations.find((x) => x.nation_id === list.nation_id)?.nation_name}
      </span>
    </p>

    <p className="dietary-preferences">
      <span>{!list.isvegan ? "" : "🥗 Vegan "}</span>
      <span>{!list.isvegetarian ? "" : "🌿 Vegetarian "}</span>
    </p>

    <p className="ingredients">
      <span>
        {list.ingredient.map((element) => {
          return ingList.find((x) => x.id === element)?.name + ", ";
        })}
      </span>
    </p>

    <div className="recipe-details">
      <span className="difficulty-level">LVL 😬: {list.difficulty}</span>
      <span className="recipe-view">👀 {list.recipe_view}</span>
    </div>
    <div></div>
    <iframe
      width="1200"
      height="900"
      src={list.youtube_link.replace("watch?v=", "embed/")}
    ></iframe>
  </div>
);

export default RecipePage;
