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
// console.log(result);

// second

/*
Организовать функцию getInfo, которая принимает объект вида
{ name: ..., info: { employees: [...], partners: [ … ] } }
и выводит в консоль имя (если имени нет, показывать ‘Unknown’) и первые две компании из массива partners:

const organisation = {

name: 'Google',

info: { employees: [‘Vlad’, ‘Olga’], partners: ['Microsoft', 'Facebook', 'Xing'] }

};



getInfo(organisation); →

Name: Google

Partners: Microsoft Facebook
*/
const organisation = {
  name: "Google",

  info: {
    employees: ["Vlad", "Olga"],
    partners: ["Microsoft", "Facebook", "Xing"],
  },
};

const getInfo = ({ ...org }) => {
  // console.log(org);
  const {
    name,
    info: {
      partners: [first, second, ...others],
    },
  } = org;
  return `Name: ${name}, Parters: ${first}, ${second};`;
};

const result2 = getInfo(organisation);
console.log(result2);
