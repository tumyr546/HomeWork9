// Завдання 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

//${i + 1} робить так щоб починалося з 1
function logItems(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}
logItems(["Mango", "Poly", "Ajax"]);

// Завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  const totalPrice = words.length * pricePerWord;
  return totalPrice;
}
console.log(calculateEngravingPrice("1 2 3", 20)); // виводе 60, бо у тексті 3 символи

// Завдання 3
// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

function findLongestWord(string) {
  // Розділити рядок на окремі слова
  let words = string.split(" ");

  //перше слово — найдовше 
  let longest = words[0];

  // Перебрати всі слова і знайти найдовше
  for (let i = 1; i < words.length; i += 1) {
    if (words[i].length > longest.length) {
      longest = words[i];
    }
  }
  // Поверне найдовше слово
  return longest;
}
console.log("я знов не виспався");
console.log(findLongestWord("я знов не виспався")); // виспався

// Завдання 4
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

function formatString(string) {
  if (string.length <= 40){
    return string
  }else {
     return string.slice(0, 40) + '...';
  }
}
console.log(formatString('ох ці 40 символів'));
console.log(formatString('1 2 3 4 5 6 7 8 9 1 0 1 1 1 2 1 3 1 4 1 5 1 6'));

// Завдання 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

function checkForSpam(message) {
  // Переводимо все повідомлення у нижній регістр
  const lowerCaseMessage = message.toLowerCase();

  // Перевіряємо, чи містить рядок "spam" або "sale"
  return lowerCaseMessage.includes("spam") || lowerCaseMessage.includes("sale"); // || це і є знак або 
}
console.log(checkForSpam("Цей сайт виглядає як SPAM"));
console.log(checkForSpam(" I'm looking forward to SaLE,I want to buy a new bike."));
console.log(checkForSpam("а все нема тут таких слів"));

// Завдання 6
// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число (або натисніть Cancel для завершення):");

  if (input === null) { //перевіряє чи натиснув користувач "cancel"
    break; // Користувач натиснув Cancel
  }

  const number = Number(input);

  if (isNaN(number)) {   //перевіря чи введене значення не є числом
    alert("Було введено не число, спробуйте ще раз");
    continue;
  }

  numbers.push(number); // додає число
}

if (numbers.length > 0) {
  for (const num of numbers) { // перебирає всі числа та додає до total
    total += num;
  }

  console.log(`Загальна сума чисел дорівнює ${total}`);
} else {
  console.log("Масив був порожній. Немає що підсумовувати.");
}