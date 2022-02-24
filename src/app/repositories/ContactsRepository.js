const { v4 } = require('uuid');

let contacts = [
  {
    id: v4(),
    name: 'Bruno',
    email: 'bruno@mail.com',
    phone: '1144448888',
    category_id: v4(),
  },
  {
    id: v4(),
    name: 'Felipe',
    email: 'felipe@mail.com',
    phone: '1188884444',
    category_id: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(contacts.find((contact) => contact.id === id)));
  }

  findByEmail(email) {
    return new Promise((resolve) => resolve(contacts.find((contact) => contact.email === email)));
  }

  create(contact) {
    const newContact = { id: v4(), ...contact };
    return new Promise((resolve) => resolve(contacts.push(newContact)));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  update(id, updateContact) {
    return new Promise((resolve) => {
      contacts = contacts.map((contact) => (contact.id === id ? { ...updateContact } : contact));
      resolve();
    });
  }
}

module.exports = new ContactsRepository();
