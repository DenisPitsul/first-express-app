const createError = require('http-errors');
const { ContactDB } = require('./../models');

module.exports.getContacts = (req, res) => {
  const { page, results } = req.pagination;
  const contacts = ContactDB.getContacts(page, results);
  res.status(200).send(contacts);
};

module.exports.createContact = (req, res) => {
  const { body } = req;
  const createdContact = ContactDB.createContact(body);
  res.status(201).send(createdContact);
};

module.exports.getContactById = (req, res, next) => {
  const {
    params: { id },
  } = req;
  const foundContact = ContactDB.getContactById(id);
  if (foundContact) {
    return res.status(200).send(foundContact);
  }
  next(createError(404, 'Contact Not Found'));
};

module.exports.updateContactById = (req, res, next) => {
  const {
    params: { id },
    body,
  } = req;
  const updatedContact = ContactDB.updateContact(id, body);
  if (updatedContact) {
    return res.status(200).send(updatedContact);
  }
  next(createError(404, 'Contact Not Found'));
};

module.exports.deleteContactById = (req, res, next) => {
  const {
    params: { id },
  } = req;

  const deletedContact = ContactDB.deleteContact(id);
  if (deletedContact) {
    return res.send(204).send();
  }
  next(createError(404, 'Contact Not Found'));
};
