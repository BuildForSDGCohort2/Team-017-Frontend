import React from "react";
import { Link } from "react-router-dom";
import data from "../../data";

function Categories() {
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <>
      <h3>Shopping categories</h3>
      <button className="sidebar-close-button" onClick={closeMenu}>
        X
      </button>
      <ul>
        {data.categories.map((category) => (
          <li>
            <Link to="">{category.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Categories;
