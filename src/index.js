// module.exports = function reverse (n) {

// }
module.exports = function reverse(n) {
	if (n >= 0) {
		n = n + ""
		return n.split("").reverse().join("");
	}
	else {
		n = n * (-1) + ""
		return n.split("").reverse().join("");
	}
}