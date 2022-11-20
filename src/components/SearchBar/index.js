import { BiSearch } from "react-icons/bi";
import "./searchBar.css";

const SearchBar = () => {
  return (
    <div className="search__bar--container">
      <form className="search__bar--form">
        <BiSearch className="search__bar--icon" />
        <input
          type="seach"
          placeholder="Search"
          className="search__bar--input"
        />
      </form>
    </div>
  );
};

export default SearchBar;
