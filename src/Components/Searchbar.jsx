import { useState } from "react";
import logo from "../assets/image.png";

const Searchbar = ({ handleQuery }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    handleQuery(value);
  };

  return (
    <header className="Searchbar">
      <div className="Searchbar-wrapper">
        <img src={logo} alt="Logo" className="Searchbar-logo"/>
      </div>

      <form onSubmit={handleSubmit} className="SearchForm">
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>


        <input
          className="SearchForm-input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoComplete="off"
          autoFocus
          placeholder="Поиск фото..."
        />
      </form>
    </header>
  );
};

export default Searchbar;
