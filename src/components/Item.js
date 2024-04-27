import React, { useState } from "react";

function Item({ name, category }) {
  const [itemState, setItemState] = useState(false);

  const listClassName = itemState ? "in-cart" : "";

  function stateHandler() {
    setItemState((currentState) => !currentState);
  }

  return (
    <li className={listClassName}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={stateHandler}>
        {itemState ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
