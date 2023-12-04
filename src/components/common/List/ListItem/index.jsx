import React from "react";
import "./styles.css";

import { Link } from "react-router-dom";
const ListItem = ({
  item: {
    recipe_id,
    recipe_name,
    rating,
    difficulty,
    recipe_view,
    type_id,
    nation_id,
    ingredient,
    photo,
    isvegan,
    isvegetarian,
  },
  type_receipts,
  nations,
  ingList,
}) => (
  <div className="listItem-wrap">
    <img src={photo} alt="" />

    <Link to={`/recipe/${recipe_id}`}>{recipe_name}</Link>

    <span>⭐{rating}</span>

    <p>
      <b>
        {type_receipts.find((x) => x.type_id === type_id)?.type_name},{" "}
        {nations.find((x) => x.nation_id === nation_id)?.nation_name}
      </b>
    </p>
    <p>
      <b>{!isvegan ? "" : "/ Vegan"}</b>
      <b>{!isvegetarian ? "" : "/ Vegetarian"}</b>
    </p>
    <p>
      <b>
        {" "}
        {ingredient.map((element) => {
          return ingList.find((x) => x.id === element)?.name + ", ";
        })}
      </b>
    </p>

    <p>
      <b>Level of Difficulty: {difficulty} </b>
      <b> 👀{recipe_view}</b>
    </p>
  </div>
);

export default ListItem;
