import { useState } from "react";

const Searchbar = ({ handleQuery }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    handleQuery(value);
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
        <input
          className="SearchForm-input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autocomplete="off"
          autoFocus
          placeholder="Поиск изображений и фото"
        />
      </form>
    </header>
  );
};

export default Searchbar;
