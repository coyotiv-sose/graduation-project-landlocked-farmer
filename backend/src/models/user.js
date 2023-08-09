const mongoose = require('mongoose')
const autopopulate = require('mongoose-autopopulate')
const Booking = require('./booking')
const Hotel = require('./hotel')
const Room = require('./room')

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phoneNumber: String,
  email: String,
  address: String,
  city: String,
  bookings: [
    { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', autopopulate: { maxDepth: 1 } },
  ],
})

class User {
  async book(room, checkIn, checkOut) {
    // Convert check-in and check-out dates to Date objects
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)

    const booking = await Booking.create({
      guest: this,
      room,
      checkInDate,
      checkOutDate,
    })

    this.bookings.push(booking)
    await this.save()
    room.bookings.push(booking)
    await room.save()

    return booking
  }
}

// ------------------------------------------------------------------------ //

userSchema.plugin(autopopulate)
userSchema.loadClass(User)
module.exports = mongoose.model('User', userSchema)
