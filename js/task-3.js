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