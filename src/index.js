module.exports = function reverse (n) {
  return String(n).split("").reverse().filter(el => el !== '-').join("")
}
