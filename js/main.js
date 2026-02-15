
function logItems(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
logItems(["Mango", "Poly", "Ajax"]);


function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  const totalPrice = words.length * pricePerWord;
  return totalPrice;
}
console.log(calculateEngravingPrice("1 2 3", 20)); 


function findLongestWord(string) {
 
  let words = string.split(" ");

 
  let longest = words[0];

 
  for (let i = 1; i < words.length; i += 1) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
 
  return longest;
}
console.log("я знов не виспався");
console.log(findLongestWord("я знов не виспався"));

function formatString(string) {
  if (string.length <= 40){
    return string
  }else {
     return string.slice(0, 40) + '...';
  }
}
console.log(formatString('ох ці 40 символів'));
console.log(formatString('1 2 3 4 5 6 7 8 9 1 0 1 1 1 2 1 3 1 4 1 5 1 6'));

function checkForSpam(message) {
  
  const lowerCaseMessage = message.toLowerCase();

 
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale"); 
}
console.log(checkForSpam("Цей сайт виглядає як SPAM"));
console.log(checkForSpam(" I'm looking forward to SaLE,I want to buy a new bike."));
console.log(checkForSpam("а все нема тут таких слів"));


let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число (або натисніть Cancel для завершення):");

  if (input === null) { 
    break; 
  }

  const number = Number(input);

  if (isNaN(number)) {   
    alert("Було введено не число, спробуйте ще раз");
    continue;
  }

  numbers.push(number); 
}

if (numbers.length > 0) {
  for (const num of numbers) {
    total += num;
  }

  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log("Масив був порожній. Немає що підсумовувати.");
}