module.exports.add = (a,b) => a+b

module.exports.square = (a) => a*a

module.exports.setName = (user, fullName) => {
  var names = fullName.split(' ')
  user.firstName = names[0]
  user.lastName = names[1]
  return user
}

module.exports.addASynch = (a,b,cb) => {
  setTimeout(() => {
    cb(a+b)}, 1800)
}

module.exports.squareASynch = (a, cb) => {
  setTimeout(() => {
    cb(a*a)
  }, 1000)
}
