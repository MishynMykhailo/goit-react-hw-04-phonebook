import { useState, useEffect } from 'react';

import ContactList from '../ContactList';
import Filter from '../Filter';
import { nanoid } from 'nanoid';
import s from '../App/App.module.css';
import { ContactForm } from 'components/ContactForm';

export const App = () => {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContacts = ({ name, number }) => {
    console.log(name);
    console.log(number);
    const normalizedName = name.toLowerCase();
    if (
      contacts.find(cont => {
        return cont.name.toLowerCase() === normalizedName;
      })
    ) {
      alert(`${name} is already in contacts`);
    } else {
      setContacts(prevState => [
        {
          id: nanoid(),
          name: name,
          number: number,
        },
        ...prevState,
      ]);
    }
  };
  const deleteContacts = contactsId => {
    setContacts(() => contacts.filter(contact => contact.id !== contactsId));
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };
  return (
    <div className={s.div}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={e => addContacts(e)} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        contacts={getVisibleContacts()}
        onDeleteContacts={deleteContacts}
      />
    </div>
  );
};
