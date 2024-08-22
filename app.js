const express = require('express');
const { validate, errorHandlers, pagination } = require('./middleware');
const { contactsController } = require('./controllers');

const app = express();

app.use(express.json());

app.get(
  '/',
  (req, res, next) => {
    next();
  },
  (req, res) => {
    res.send('app )))');
  }
);

app.get(
  '/contacts',
  pagination.paginateContacts,
  contactsController.getContacts
);

app.post(
  '/contacts',
  validate.validateContactOnCreate,
  contactsController.createContact
);

app.get('/contacts/:id', contactsController.getContactById);

app.patch(
  '/contacts/:id',
  validate.validateContactOnUpdate,
  contactsController.updateContactById
);

app.delete('/contacts/:id', contactsController.deleteContactById);

app.use(errorHandlers.validationErrorHandler, errorHandlers.errorHandler);

// app.get('/users/:id/orders', (req, res) => {
//   const {
//     params: { id },
//     query: { isDone },
//   } = req;
//   console.log('isDone:', isDone);
//   res.status(200).send('OK');
// });

module.exports = app;
