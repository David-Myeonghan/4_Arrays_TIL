// Create a function that reverses a string.
// 'Hi my name is David' shoud be:
// 'divaD si eman ym iH'
// --------------------------- // my answer
let str = "Hi my name is David";

function reverse1(string) {
	let reverse = string.split(""); // 'split' not needed as strings in JS are already arrays.
	console.log(reverse);
	reverse.reverse();
	console.log(reverse);
}

// reverse1(str);
// --------------------------- // solution1 - not necessarily cleanest way.

function reverse(str) {
	// Check input
	if (!str || str.length < 2 || typeof str !== "string") {
		return "hmm that is not good";
	}

	const backwards = [];
	const totalItems = str.length - 1; // length
	for (let i = totalItems; i >= 0; i--) {
		backwards.push(str[i]);
	}
	console.log(backwards);

	return backwards.join("");
}

reverse("Hi my name is David");

// --------------------------- // solution2

function reverse2(str) {
	if (!str || str.length < 2 || typeof str !== "string") {
		return "hmm that is not good";
	}

	return str.split("").reverse().join();
}

// --------------------------- // solution3

const reverse3 = (str) => str.split("").reverse().join("");

// --------------------------- // solution4
const reverse4 = (str) => [...str].reverse().join("");
