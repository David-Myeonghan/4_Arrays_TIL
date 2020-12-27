const strings = ["a", "b", "c", "d"];
// in 32 bits system,
// 4 items * 4 shlelf = 16 bytes of storage
// storing values in sequential order in RAM.

console.log(strings[2]); // Look up: O(1) as computer knows where they are.

//push: adds it at the end of array.
// not looping through anything, as computer knows where the last item is sotred.
strings.push("e"); // O(1)
console.log(strings);

// pop: the opposite of push. Remove the last item from the array.
strings.pop(); // O(1)
console.log(strings);

// unshift(in JS): insert at the start of the array.
strings.unshift("x"); // O(n); as this operation has to loop through everyting to move indexes.
console.log(strings);
// maybe not the best data structure for adding items at the beggining.

// splice: add(, or delete) items in the middle
strings.splice(2, 0, "alien"); // O(n); same as unshift.
console.log(strings);

// DYNAMIC ARRAY.

// In C++,
// Static Array;
// int a[20];
// int b[5] {1,2,3,4,5}

// JS, Python, Java uses **dynamic array** default.
