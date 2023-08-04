const axios = require('axios')
const { response } = require('express')
const chalk = require('chalk')

axios.defaults.baseURL = 'http://localhost:3000'

// ------------------------------------------------------------------------ //

async function main() {
  // DROP DB
  await axios.get('/drop-db')

  // CREATE
  const hotelLasCalas = await axios.post('/hotels', {
    name: 'LasCalas',
    location: 'Asuncion, PY',
    // rooms: 7,
    bookings: [],
  })

  const doubleRoom = await axios.post('/rooms', {
    hotel: hotelLasCalas.data,
    type: 'double',
    capacity: 2,
    units: 2,
    amenities: ['wifi', 'tv', 'air conditioning'],
  })

  const singleRoom = await axios.post('/rooms', {
    hotel: hotelLasCalas.data,
    type: 'single',
    capacity: 1,
    units: 3,
    amenities: ['wifi', 'tv', 'air conditioning'],
  })

  const suiteRoom = await axios.post('/rooms', {
    hotel: hotelLasCalas.data,
    type: 'suite',
    capacity: 2,
    units: 2,
    amenities: ['wifi', 'tv', 'air conditioning', 'balcony'],
  })

  const marvin = await axios.post('/users', {
    firstName: 'Marvin',
    lastName: 'Werkmeister',
    phoneNumber: '555-555-5555',
    email: 'marvin.blerg@gmail.com',
    address: 'Timbuktustrasse 5',
    city: 'Berlin',
    bookings: [],
  })

  const federico = await axios.post('/users', {
    firstName: 'Federico',
    lastName: 'Carrillo',
    phoneNumber: '888-888-8888',
    email: 'federico.blerg@gmail.com',
    address: 'Timbuktustrasse 8',
    city: 'Berlin',
    bookings: [],
  })

  const marvinBooking = await axios.post('/bookings', {
    type: doubleRoom.data.type,
    checkIn: '2019-01-01',
    checkOut: '2019-01-05',
    user: marvin.data._id,
  })

  const federicoBooking = await axios.post('/bookings', {
    type: suiteRoom.data.type,
    checkIn: '2019-01-06',
    checkOut: '2019-01-10',
    user: federico.data._id,
  })

  // DELETE
  // const deleteFedericoBooking = await axios.delete(`/bookings/${federicoBooking.data._id}`)

  // READ
  const allUsers = await axios.get('/users')
  console.log(chalk.bgGreenBright('----> List of all users <----'), allUsers.data)

  const allBookings = await axios.get('/bookings')
  console.log(chalk.bgGreenBright('----> List of all bookings <----'), allBookings.data)

  const allRooms = await axios.get('/rooms')
  console.log(chalk.bgGreenBright('----> List of all rooms <----'), allRooms.data)

  const hotelInfo = await axios.get('/hotels/LasCalas')
  console.log(chalk.bgGreenBright('----> Fetch Hotel Info & Bookings <----'), hotelInfo.data)
}

main().catch(error =>
  console.log(chalk.bgRedBright('Error message:', error.data ? error.data : error))
)

// ------------------------------------------------------------------------ //
