// Time -> O(nlogn + mlogm) | Space -> O(1)

function smallestDifference(arrayOne, arrayTwo) {
  
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let smallest = Infinity;
  let pointerOne = 0;
  let pointerTwo = 0;

  let num1, num2;
  
  while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {

    let currentDifference = Math.abs(arrayOne[pointerOne] - arrayTwo[pointerTwo]);

    if (currentDifference === 0) {
      return [arrayOne[pointerOne], arrayTwo[pointerTwo]];
    }
    
    if (currentDifference < smallest) {
      smallest = currentDifference;
      num1 = arrayOne[pointerOne];
      num2 = arrayTwo[pointerTwo];
    }

    if (arrayOne[pointerOne] < arrayTwo[pointerTwo]) {
      pointerOne++;
    } else {
      pointerTwo++;
    }
    
  }

  return [num1, num2];
}


// Do not edit the line below.
exports.smallestDifference = smallestDifference;
