import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { List } from './ContactList.styled';
import ContactListItem from './ContactItem';
import Notification from '../Notifications/Notifications';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const nameFilter = useSelector(getFilter);
  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  const visibleContacts = filteredContacts(contacts, nameFilter);

  if (visibleContacts.length === 0) {
    return <Notification message="There is no contacts" />;
  }

  return (
    <List>
      {visibleContacts.map(({ id, name, number }) => (
        <ContactListItem key={id} contact={{ id, name, number }} />
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
