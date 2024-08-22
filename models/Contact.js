const { v4: uuidv4 } = require('uuid');
const { format } = require('date-fns');

const contactsDB = [
  {
    id: '0',
    name: 'Test',
    telNumber: '+380123456789',
    birthday: '2000-12-01',
    isFavourite: false,
  },
  {
    id: '1',
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'Y-MM-dd'),
    isFavourite: true,
  },
  {
    id: '2',
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'Y-MM-dd'),
    isFavourite: true,
  },
  {
    id: '3',
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'Y-MM-dd'),
    isFavourite: true,
  },
  {
    id: '4',
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'Y-MM-dd'),
    isFavourite: true,
  },
  {
    id: '5',
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'Y-MM-dd'),
    isFavourite: true,
  },
  {
    id: '6',
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'Y-MM-dd'),
    isFavourite: true,
  },
  {
    id: '7',
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'Y-MM-dd'),
    isFavourite: true,
  },
  {
    id: '8',
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'Y-MM-dd'),
    isFavourite: true,
  },
  {
    id: '9',
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'Y-MM-dd'),
    isFavourite: true,
  },
  {
    id: '10',
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'Y-MM-dd'),
    isFavourite: true,
  },
  {
    id: '11',
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'Y-MM-dd'),
    isFavourite: true,
  },
  {
    id: '12',
    name: 'Test1',
    telNumber: '+380123456788',
    birthday: format(new Date(), 'Y-MM-dd'),
    isFavourite: true,
  },
];

class ContactsDB {
  constructor (arr) {
    this.contacts = [...arr];
  }

  createContact (newContact) {
    this.contacts.push({ ...newContact, id: uuidv4(), isFavourite: false });
    return this.contacts[this.contacts.length - 1];
  }

  getContacts (page, results) {
    return [...this.contacts.slice((page - 1) * results, page * results)];
  }

  getContactById (id) {
    const foundIndex = this.contacts.findIndex(c => c.id === id);
    return foundIndex === -1 ? null : this.contacts[foundIndex];
  }

  updateContact (id, values) {
    const foundIndex = this.contacts.findIndex(c => c.id === id);
    if (foundIndex !== -1) {
      this.contacts[foundIndex] = {
        ...this.contacts[foundIndex],
        ...values,
      };
      return this.contacts[foundIndex];
    }
    return null;
  }

  deleteContact (id) {
    const foundIndex = this.contacts.findIndex(c => c.id === id);
    return foundIndex === -1 ? null : this.contacts.splice(foundIndex);
  }
}

const contactsDbInstance = new ContactsDB(contactsDB);

module.exports = contactsDbInstance;
