# `Smallest Difference`

## Description

The `smallestDifference` function finds the pair of numbers (one from each of two arrays) whose absolute difference is the smallest among all possible pairs. This function efficiently determines the closest pair using a sorted two-pointer approach, making it optimal for scenarios where comparing large datasets is required.

## Function Signature

```javascript
function smallestDifference(arrayOne, arrayTwo) -> Array<number>
```

## Parameters

- **arrayOne** (`Array<number>`): The first array of integers.
- **arrayTwo** (`Array<number>`): The second array of integers.

## Returns

- **`Array<number>`**: A two-element array containing the pair of numbers with the smallest difference. The first element comes from `arrayOne`, and the second from `arrayTwo`.

## Time and Space Complexity

- **Time Complexity**: `O(n log n + m log m)` where `n` and `m` are the lengths of `arrayOne` and `arrayTwo` respectively. This is due to the sorting of both arrays, followed by a single traversal.
- **Space Complexity**: `O(1)` as no additional data structures proportional to the input size are used, apart from a few variables for tracking indices and differences.

## Algorithm Explanation

1. **Sorting**:
   - Both arrays are sorted in ascending order, which allows for efficient comparisons using two pointers.

2. **Two-Pointer Traversal**:
   - Pointers are initialized at the beginning of each array.
   - The difference between the elements pointed to by the two pointers is calculated.
   - If the difference is smaller than the previously recorded smallest difference, update the smallest difference and store the current pair.

3. **Pointer Adjustment**:
   - Move the pointer in the array with the smaller current value to increase the value and minimize the difference.

4. **Termination**:
   - The loop terminates when either pointer reaches the end of its respective array.

## Examples

### Example 1:
```javascript
smallestDifference([1, 3, 15, 11, 2], [23, 127, 235, 19, 8]);
// Output: [11, 8]
// The pair (11, 8) has the smallest absolute difference of 3.
```

### Example 2:
```javascript
smallestDifference([10, 20, 30], [40, 50, 60]);
// Output: [30, 40]
// The pair (30, 40) has the smallest absolute difference of 10.
```

### Example 3:
```javascript
smallestDifference([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17]);
// Output: [28, 26]
// The pair (28, 26) has the smallest absolute difference of 2.
```

## Edge Cases

- **Negative Numbers**: Works correctly for arrays containing negative integers.
- **Empty Array**: If either array is empty, the function will not work as intended.
- **Duplicate Numbers**: Handles duplicates correctly, as it considers absolute differences.

## Usage

### Importing the Function
You can use this function in your project by importing it as follows:
```javascript
const { smallestDifference } = require('./smallestDifference');
```

### Running the Function
Call the function with two arrays as arguments:
```javascript
const result = smallestDifference([1, 2, 3], [4, 5, 6]);
console.log(result); // Output: [3, 4]
```

## License

This project is available under the MIT License. Feel free to use and modify it as per your needs.

---

This README provides clear and comprehensive guidance for understanding and utilizing the `smallestDifference` function in any project.
