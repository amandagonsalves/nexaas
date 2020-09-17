const Database = require('./db');
const createCard = require('./createCard');
const faker = require('faker');

Database.then(async (db) => {
    cardValue = {
        title: faker.lorem.sentence(),
        thumbnail: faker.image.business(),
        description: faker.lorem.paragraph(),
        action: faker.lorem.sentence(),
        href: faker.internet.url()
    }
    const selectedCards = await db.all("SELECT * FROM cards");/*  
    console.log(selectedCards);
    console.log(cardValue)  */
})