import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactList } from 'components/ContactList';
import { Box } from '../Box';
import { Section } from '../Section';
import { ContactForm } from '../ContactForm';
import {Filter} from '../Filter'
 import background from '../../images/background_blue_abstract.jpg';

const LS_CONTACT_KEY= 'contacts'
const initialContacts = [
  // { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  // { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  // { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  // { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter:'',
  };
  //=============================================

  componentDidMount() {
    const localStorageContacts = JSON.parse(localStorage.getItem(LS_CONTACT_KEY));
    if (localStorageContacts) {
      this.setState({ contacts: localStorageContacts });
    }
  }
  //============================================
  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem(LS_CONTACT_KEY, JSON.stringify(this.state.contacts));
    }
  }

//----------------------------------
  addContact = ({ name, number }) => {
    const searchingName = name.toLowerCase().trim();
    const foundName = this.state.contacts.find(
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

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => {
      const contacts = prevState.contacts.filter(contact => contact.id !== id);
      return { contacts };
    });
  };

  handleUpdateFilter = event => {
    const filter = event.target.value.toLowerCase();
    this.setState({ filter });
  };

  showFilteredContacts = () => {
    let { contacts, filter } = this.state;
    filter = filter.trim();
    return filter
      ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
      : contacts;
  };
//----------------------------------------
  render() {
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
            <ContactForm addContact={this.addContact} />
          </Section>
        </Box>
        <Section title="Contacts"  >
          <Filter
            handleUpdateFilter={this.handleUpdateFilter}
            filteredValue={this.state.filter}
          />

          <ContactList
            filteredContacts={this.showFilteredContacts()}
            deleteContact={this.deleteContact}
          />
        </Section>
      </Box>
    );
  }
}
