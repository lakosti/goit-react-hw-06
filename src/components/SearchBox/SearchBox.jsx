import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { selectNameFilter } from "../../redux/selectors";

const SearchBox = () => {
  const searchValue = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  const handelInputSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div className={css.searchWrap}>
      <span className={css.searchName}>Find contacts by name:</span>
      <input
        className={css.seacrhInput}
        type="text"
        value={searchValue}
        onChange={handelInputSearch}
      />
    </div>
  );
};

export default SearchBox;
