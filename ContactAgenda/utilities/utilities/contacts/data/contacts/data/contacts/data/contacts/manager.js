// contacts/manager.js
const { capitalize } = require('../utilities/strings');
const { randomNumber } = require('../utilities/numbers');
const { names, phoneNumbers } = require('./data');

function getRandomContact() {
    const randomIndex = randomNumber() - 1;
    const randomName = capitalize(names[randomIndex]);
    const phoneNumber = phoneNumbers[randomIndex];

    return { name: randomName, phoneNumber };
}

module.exports = {
    getRandomContact
};
