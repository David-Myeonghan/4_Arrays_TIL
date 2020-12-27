// Given those two [0, 3, 4, 31], [4, 6, 30] arrays,
// Merge them sorted.
// [0,3,4,4,6,30,31]

// ----------------------------------------- My answer
// function mergeSortedArrays(arr1, arr2) {
// 	const combine = [];

// 	for (let i = 0; i <= arr1.length - 1; i++) {
// 		for (let j = 0; j <= arr2.length - 1; j++) {
// 			if (arr1[i] < arr2[j]) {
// 				combine.push(arr1[i]);
// 				break;
// 			} else if (arr1[i] > arr2[j]) {
// 				combine.push(arr2[j]);
// 				break;
// 			} else if (arr1[i] === arr2[j]) {
// 				combine.push(arr1[i], arr2[j]);
// 			}
// 		}
// 	}
// 	console.log(combine);
// }

// ----------------------------------------- Solution01
function mergeSortedArrays(array1, array2) {
	const mergedArray = [];
	let array1Item = array1[0]; // first item of array
	let array2Item = array2[0];
	let i = 1;
	let j = 1;

	// Check input
	if (array1.length === 0) {
		return array2;
	}
	if (array2.length === 0) {
		return array1;
	}

	while (array1Item || array2Item) {
		console.log(array1Item, array2Item);
		if (!array2Item || array1Item < array2Item) {
			// 31 > undefined:  false // Not readable, so, this is not the cleaneast solution
			mergedArray.push(array1Item);
			array1Item = array1[i];
			i++;
		} else {
			mergedArray.push(array2Item);
			array2Item = array2[j];
			j++;
		}
	}

	return mergedArray;
}

mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
