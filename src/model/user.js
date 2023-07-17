class User {
  constructor(
    userId,
    firstName,
    lastName,
    phoneNumber,
    email,
    password,
    address,
    city,
    zipcode,
    paymentMethod,
    creationDate
  ) {
    this.userID = userId
    this.firstName = firstName
    this.lastName = lastName
    this.phoneNumber = phoneNumber
    this.email = email
    this.password = password
    this.address = address
    this.city = city
    this.zipcode = zipcode
    this.paymentMethod = paymentMethod
    this.creationDate = creationDate
  }
}

module.exports = User