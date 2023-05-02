// first

/*
Используя rest оператор и деструктуризацию, создать функцию,
которая принимает любое количество аргументов и возвращает объект,
содержащий первый аргумент и массив из остатка:

func(‘a’, ‘b’, ‘c’, ‘d’) →

{ first: ‘a’, other: [‘b’, ‘c’, ‘d’] }
*/
function myFunc(...arg) {
  const [first, ...other] = arg;
  return { first, other };
}
const result = myFunc("a", "b", "c", "d");
console.log(result);
