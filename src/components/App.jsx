import { Component } from 'react';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { ContactForm } from './ContactForm/ContactForm';
import initialContacts from './contacts.json';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  onAddContact = newContact => {
    if (
      this.state.contacts.find(
        contact =>
          contact.name.toLowerCase() === newContact.name.toLowerCase() ||
          contact.number === newContact.number
      )
    ) {
      return alert(
        `${newContact.name} or ${newContact.number} is already in contacts.`
      );
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onGetContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onFindContact = e => {
    this.setState({ filter: e.target.value });
  };

  onDelteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { filter } = this.state;
    return (
      <Layout>
        <Section title="Phonebook"></Section>
        <ContactForm onAddContact={this.onAddContact} />

        <Section title="Contacts"></Section>
        <Filter value={filter} onChange={this.onFindContact} />
        <ContactList
          contacts={this.onGetContacts()}
          onDelteContact={this.onDelteContact}
        />
      </Layout>
    );
  }
}
