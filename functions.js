// counting cards
// if count is positive, then Bet
// if count is 0 or negative, then Hold

function countingCards(input1, input2) {
   var count = 0;
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

   switch (input2) {
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

   if (count > 0) {
      return count + " Bet";
   } else {
      return count + " Hold";
   }
}

// profile lookup

function profileLookup(input1, input2) {
   var contacts = [
      {
         firstName: "Akira",
         lastName: "Laine",
         number: "0543236543",
         likes: ["Pizza", "Coding", "Brownie Points"],
      },
      {
         firstName: "Harry",
         lastName: "Potter",
         number: "0994372684",
         likes: ["Hogwarts", "Magic", "Hagrid"],
      },
      {
         firstName: "Sherlock",
         lastName: "Holmes",
         number: "0487345643",
         likes: ["Intriguing Cases", "Violin"],
      },
      {
         firstName: "Kristian",
         lastName: "Vos",
         number: "unknown",
         likes: ["JavaScript", "Gaming", "Foxes"],
      },
   ];
   // input1 = name
   // input2 = property (ex: firstName, number)

   for (var i = 0; i < contacts.length; i++) {
      var contact = contacts[i];
      if (contact.firstName === input1) {
         if (contact[input2] != undefined) {
            return contact[input2];
         }
         return "No such property";
      }
   }
   return "No such contact";
}

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

// typeof
// need to fix - not sure how to do
function typeofVar(input1) {
   let a = 21;

   console.log();
}
