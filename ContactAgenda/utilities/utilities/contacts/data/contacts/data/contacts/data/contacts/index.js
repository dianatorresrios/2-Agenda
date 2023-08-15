// index.js
const { getRandomContact } = require('./contacts/manager');

const randomContact = getRandomContact();
console.log(`Nombre: ${randomContact.name}, Teléfono: ${randomContact.phoneNumber}`);
