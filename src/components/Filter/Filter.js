import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { selectFilterValue } from 'redux/contacts/selectors';

import css from 'components/Filter/Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilterValue);

  const handleChangeFilter = evt => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div className={css.box}>
      <label className={css.label}>
        Find contact by name
        <input
          type="text"
          placeholder="Search"
          name="filter"
          value={filter}
          onChange={handleChangeFilter}
          className={css.input}
        />
      </label>
    </div>
  );
};
