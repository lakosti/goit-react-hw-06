import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { useId } from "react";

const SearchBox = () => {
  const search = useSelector((state) => state.filter.name);
  const dispatch = useDispatch();

  const id = useId();

  const handelInputSearch = (evt) => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={css.searchWrap}>
      <span className={css.searchName}>Find contacts by name:</span>
      <input
        id={id}
        className={css.seacrhInput}
        type="text"
        value={search}
        onChange={handelInputSearch}
      />
    </div>
  );
};

export default SearchBox;
