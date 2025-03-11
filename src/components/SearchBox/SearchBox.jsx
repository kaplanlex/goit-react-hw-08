import { useDispatch, useSelector } from 'react-redux';

import { changeFilter } from '../../redux/filters/slice';
import { selectNameFilter } from '../../redux/filters/selectors';
import styles from './SearchBox.module.css';

const SearchBox = () => {
  const filter = useSelector(selectNameFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.searchBox}>
      <label htmlFor="search" className={styles.label}>
        Find contacts by name
      </label>
      <input
        type="text"
        id="search"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
        className={styles.input}
      />
    </div>
  );
};

export default SearchBox;