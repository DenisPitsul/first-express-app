const express = require('express');
const { contactsController } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('app )))');
});

app.get('/contacts', contactsController.getContacts);

app.post('/contacts', contactsController.createContact);

app.get('/contacts/:id', contactsController.getContactById);

app.patch('/contacts/:id', contactsController.updateContactById);

app.delete('/contacts/:id', contactsController.deleteContactById);

// app.get('/users/:id/orders', (req, res) => {
//   const {
//     params: { id },
//     query: { isDone },
//   } = req;
//   console.log('isDone:', isDone);
//   res.status(200).send('OK');
// });

module.exports = app;
