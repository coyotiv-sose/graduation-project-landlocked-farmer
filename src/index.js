const chalk = require('chalk')
const User = require('./model/user')
const Hotel = require('./model/hotel')
const Booking = require('./model/booking')

// Las Calas Hotel instance is declared
const hotelLasCalas = new Hotel('Las Calas', 'Asuncion, PY', 7)

// User instances are declared
const marvin = new User(
  'Marvin',
  'Werkmeister',
  '555-555-5555',
  'marvin.blerg@gmail.com',
  'Timbuktustrasse 5',
  'Berlin'
)
const federico = new User(
  'Federico',
  'Carrillo',
  '888-888-8888',
  'federico.blerg@gmail.com',
  'Timbuktustrasse 8',
  'Berlin'
)

// Users create a booking (instance) and book a room
// const booking1 = marvin.book(hotelLasCalas)
// const booking2 = federico.book(hotelLasCalas)

// Cancel a booking using email as ID and free up a room
// hotelLasCalas.cancelBooking('marvin.blerg@gmail.com')

/// ----- /// TEST YARD /// ---- ///
// console.log(`
// --- Tests for Booking ---
// booking1 should have a Guest: ${booking1.guest ? chalk.green('✓') : chalk.red('✗')}
// `)

// console.log(`
// --- Tests for Guest ---
// Guest Marvin should have an email: ${marvin.email ? chalk.green('✓') : chalk.red('✗')}
// `)

console.log(`
--- Tests for Hotel ---
hotelLasCalas has ${
  hotelLasCalas.rooms > 0 ? chalk.green(hotelLasCalas.rooms) : chalk.red(hotelLasCalas.rooms)
} rooms available
`)
