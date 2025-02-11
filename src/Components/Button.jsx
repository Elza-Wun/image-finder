import React from "react";

const Button = ({ handleLoadMore }) => {
  return (
    <button className="Button" onClick={handleLoadMore}>
      Показать больше
    </button>
  );
};

export default Button;
