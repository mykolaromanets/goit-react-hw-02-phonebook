import React from 'react';
import { nanoid } from 'nanoid';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-0', name: 'Marko', number: '234345345' },
      { id: 'id-1', name: 'Olena', number: '56456342' },
      { id: 'id-2', name: 'Sasha', number: '54645643' },
    ],
    filter: '',
  };
  addContact = data => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      ...data,
    };
    contacts.some(({ name }) => name === data.name)
      ? alert(`${data.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };
  deleteContact = userId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== userId),
    }));
  };
  handleChangeFilter = ({ currentTarget: { value } }) => {
    this.setState({ filter: value });
  };
  getFilterContacts = () => {
    const { filter, contacts } = this.state;
    const FilterlowerCase = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(FilterlowerCase)
    );
  };

  render() {
    const { filter } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          <Filter value={filter} handleChangeFilter={this.handleChangeFilter} />

          <ContactList
            contacts={this.getFilterContacts()}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
