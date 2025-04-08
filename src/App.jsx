import { useEffect, useState } from 'react';
import './App.css';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

function App() {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('contacts');
    return saved ? JSON.parse(saved) : initialContacts;
  });
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  const onSubmitContact = (newContact) => {
    setContacts((prev) => [...prev, newContact]);
  };
  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((contact) => contact.id !== id));
  };
  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchQuery.toLocaleLowerCase())
  );

  return (
  <div className='container'>
    <h1>Phonebook</h1>
    <ContactForm onSubmitContact={onSubmitContact} />
    <SearchBox values={searchQuery} onChange={setSearchQuery} />
    <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
  </div>
  )
}

export default App
