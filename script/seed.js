'use strict'

const db = require('../server/db')
const {User, Religion, Politics, Travel} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const religion = await Promise.all([
    Religion.create({question: 'What is the oldest religion?'}),
    Religion.create({question: 'What religion has the most followers?'}),
    Religion.create({question: 'What is considered to be the holiest city'}),
    Religion.create({question: 'How old are rocks?'}),
    Religion.create({question: 'Where is the oldest tree'}),
    Religion.create({question: 'How many ways can you find a panda?'})    
  ])

  const politics = await Promise.all([
    Politics.create({question: 'What is the oldest Politics?'}),
    Politics.create({question: 'What Politics has the most followers?'}),
    Politics.create({question: 'What are you capable of'}),
    Politics.create({question: 'Is marijuann ledgible for the masses'}),
    Politics.create({question: 'When does a peacock ussually take paid time off'}),
    Politics.create({question: 'How did alabama meet florida?'})    
  ])

  const travel = await Promise.all([
    Travel.create({question: 'What was your best travel experience?'}),
    Travel.create({question: 'What kind of taco has the best mile time?'}),
    Travel.create({question: 'How does a kangaroo increase its credit score'}),
    Travel.create({question: 'How old is rocknroll?'}),
    Travel.create({question: 'Do you believe in punk rock?'}),
    Travel.create({question: 'What is the best way to eat the alphabet?'})    
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
