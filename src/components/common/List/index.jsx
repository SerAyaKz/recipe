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
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdOh2K5r_v7Xa_OxxmEKb1rBO8dNj-jO6Zp1Xy5sWi2xmKqtQ/viewform?embedded=true" width="640" height="2127" frameborder="0" marginheight="0" marginwidth="0">Загрузка…</iframe>
  </div>
);

export default List;
