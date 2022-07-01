import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactItem
            name={name}
            number={number}
            key={id}
            id={id}
            onDeleteContacts={onDeleteContacts}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContacts: PropTypes.func,
};

export default ContactList;
