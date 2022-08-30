//Sort Array using brute force, Time complexity O(n^2)
const myArray = [5,6,7,3,8];
let i,j,temp;
let count =0;

console.log("Starting array: " + myArray);

for(i=0; i < myArray.length; i++)
{
  for(j= i + 1; j < myArray.length; j++)
  {
    if (myArray[i] > myArray[j] )
    {
      temp = myArray[i];
      myArray[i] = myArray[j];
      myArray[j] = temp;
    }
    console.log( "Sort " + count++ + " myArray = " + myArray);
    }
  }

console.log( "Sorted array = " + myArray);