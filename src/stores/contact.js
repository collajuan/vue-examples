import { defineStore } from 'pinia'

const MY_USERNAME = "aleh";
const API_URL = `https://contacts-api-yy1b.onrender.com/users/${MY_USERNAME}`;

export const useContactStore = defineStore('contact', {
  state: () => ({
    contacts: [],
  }),
  getters: {
    byId: (state) => {
      return (contactId) => state.contacts.find((contact) => contact.id === contactId)
    },
  },
  actions: {
    fetchContacts() {
      try {
        fetch(`${API_URL}/contacts`)
          .then((response) => response.json())
          .then((data) => {
            this.contacts = data;
          });
      } catch (error) {
        console.log(error);
      }
    },
    create(contact) {
      this.contacts.push(contact)
      fetch(`${API_URL}/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contact),
      })
    },
    delete(contactId) {
      this.contacts = this.contacts.filter((contact) => contact.id !== contactId)
      fetch(`${API_URL}/contacts/${contactId}`, {
        method: 'DELETE',
      })
    }
  }
})
