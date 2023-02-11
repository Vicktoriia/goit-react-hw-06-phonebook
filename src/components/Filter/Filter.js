import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { setFilter } from '../../redux/filtersSlice';
import { FilterLabel, FilterInput } from './Filter.styled';

const Filter = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };
  return (
    <FilterLabel>
      Find contacts by Name
      <FilterInput
        type="text"
        name="filter"
        placeholder="Search contact"
        value={contacts}
        onChange={handleChange}
      />
    </FilterLabel>
  );
};

export default Filter;
