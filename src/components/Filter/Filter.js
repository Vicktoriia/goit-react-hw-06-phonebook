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

  if (contacts.length === 0) {
    return null;
  }

  return (
    <>
      <FilterLabel>Find contacts by Name</FilterLabel>
      <FilterInput
        type="text"
        name="filter"
        placeholder="Search contact"
        onChange={handleChange}
      />
    </>
  );
};

export default Filter;
