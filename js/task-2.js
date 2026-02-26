// Завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(" ");
  const totalPrice = words.length * pricePerWord;
  return totalPrice;
}
console.log(calculateEngravingPrice("1 2 3", 20)); // виводе 60, бо у тексті 3 символи