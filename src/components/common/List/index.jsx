import React from "react";
import ListItem from "./ListItem";
import "./styles.css";

const List = ({ list, type_receipts, nations, ingList }) => (
  <div className="list">
    {list.map((item) => (
      <ListItem
        key={item.recipe_id}
        item={item}
        type_receipts={type_receipts}
        nations={nations}
        ingList={ingList}
      />
    ))}
  </div>
);

export default List;
