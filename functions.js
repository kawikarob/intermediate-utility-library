// counting cards
// if count is positive, then Bet
// if count is 0 or negative, then Hold
var count = 0;
function countingCards(input1, input2) {
   switch (input1) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
         count += 1;
         break;
      case 7:
      case 8:
      case 9:
         count += 0;
         break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
         count -= 1;
         break;
   }

   return count + (count > 0 ? " Bet" : " Hold");
}

// profile lookup
// need to do

// random number generator

function randomNum(input1, input2) {
   // input1 = min number
   // input2 = max number
   // return a random whole number within range of input1 & input2

   return Math.floor(Math.random() * (input2 - input1 + 1)) + input1;
}

// remove using splice
function removeSplice(input1, input2) {
   // input1 = index on the array from which to begin removing from
   // input2 = number of elements to delete

   const arr = ["Hello", "Konnichiwa", "Annyeong", "Aloha", "Hola"];
   arr.splice(input1, input2);
   return arr;
}

// add using splice
function addSplice(input1, input2, input3) {
   // input1 = index on the array from which to begin remvoing from
   // input2 = number of elements to delete
   // input3 = element(s) to be inserted at that same index

   const arr = ["Lexus", "Honda", "Nissan", "Toyota", "Subaru"];
   arr.splice(input1, input2, input3);
   return arr;
}

// indexOf
function indexOf(input1) {
   // (arr, elem)
   // input1 is the element (elem) we are checking to see if its in the array

   arr = ["Carrot", "Mushroom", "Potato", "Garlic", "Onion", "Ginger"];
   if (arr.indexOf(input1) === -1) {
      return false;
   } else {
      return true;
   }
}
