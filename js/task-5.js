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