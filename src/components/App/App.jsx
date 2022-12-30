import React, {useState, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from 'components/ContactList';
import { Box } from '../Box';
import { Section } from '../Section';
import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
 import background from '../../images/background_blue_abstract.jpg';
 

const LS_CONTACT_KEY= 'contacts'
const initialContacts = [];


export const App =()=> {
  
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('')
  const isFirstRender = useRef(true);
  //===== getting contacts from Local Storage, only first render ========================================

  useEffect(() => {
    const localStorageContacts = JSON.parse(localStorage.getItem(LS_CONTACT_KEY));
    if (localStorageContacts) {
      setContacts(localStorageContacts)
    }
  }, []
  );
  //======= saving contacts to Local Storage =====================================
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem(LS_CONTACT_KEY, JSON.stringify(contacts));
  }, [contacts]
  );

  // ===================function for adding contacts ===================================
  const addContact = ({ name, number }) => {
    const searchingName = name.toLowerCase().trim();
    const foundName = contacts.find(
      contact => contact.name.toLowerCase().trim() === searchingName
    );

    if (foundName) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };


  // ========== function for deleting contacts ================================================
  const deleteContact = id => {
    setContacts(prevContacts => 
      prevContacts.filter(contact => contact.id !== id));
  };

  // ============== search for a contact (filter  phonebook by name) ========================================
  const handleUpdateFilter = event => {
    const filter = event.target.value.toLowerCase();
    setFilter(filter);
  };

  const showFilteredContacts = () => {
    let filterTrimed = filter.trim();
     
    return filterTrimed
      ? contacts.filter(contact => contact.name.toLowerCase().includes(filterTrimed))
      : contacts;
  };
  //----------------------------------------

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      
    >
      <Box
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover'
        }}
          
      >
        <Section title="Phonebook">
          <ContactForm addContact={addContact} />
        </Section>
      </Box>
      <Section title="Contacts"  >
        <Filter
          handleUpdateFilter={handleUpdateFilter}
          filteredValue={filter}
        />

        <ContactList
          filteredContacts={showFilteredContacts()}
          deleteContact={deleteContact}
        />
      </Section>
    </Box>
  );
}   

