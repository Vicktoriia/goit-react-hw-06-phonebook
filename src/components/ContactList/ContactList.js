import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { List, Item } from './ContactList.styled';
import ContactListItem from '../ContactList/ContactItem';
import Notification from '../Notifications/Notifications';

const getVisibleContacts = (contacts, nameFilter) => {
  const normalizedFilter = nameFilter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

function ContactList() {
  const contacts = useSelector(getContacts);
  const nameFilter = useSelector(getFilter);
  const shownContacts = getVisibleContacts(contacts, nameFilter);

  if (shownContacts.length === 0) {
    return <Notification message="There is no contacts" />;
  }

  return (
    <div>
      <List>
        {shownContacts.map((contact, id) => (
          <Item key={id}>
            <ContactListItem contact={contact} />
          </Item>
        ))}
      </List>
    </div>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

export default ContactList;
