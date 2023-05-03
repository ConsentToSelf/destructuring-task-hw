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
//
// third

/*
Дан объект:

let user = {

    "guid": "dd969d30-841d-436e-9550-3b0c649e4d34",

    "isActive": false,

    "balance": "$2,474.46",

    "age": 30,

    "eyeColor": "blue",

    "name": "Tameka Maxwell",

    "gender": "female",

    "company": "ENOMEN",

    "email": "tamekamaxwell@enomen.com",

    "phone": "+1 (902) 557-3898",

    "tags": [

      "aliquip",

      "anim",

      "exercitation",

      "non",

    ],

    "friends": [

      {

        "id": 0,

        "name": "Barber Hicks"

      },

      {

        "id": 1,

        "name": "Santana Cruz"

      },

      {

        "id": 2,

        "name": "Leola Cabrera"

      }

    ],

  };

Используя деструктуризацию получить значения из следующих полей

1. name,  balance, email

2. из массива tags получить первый и последний элемент

3. из массива friends получить значение поле name из первого элемента массива

Если какое то из полей не имеет значения то подставить значение по умолчанию.
*/
let user = {
  guid: "dd969d30-841d-436e-9550-3b0c649e4d34",
  isActive: false,
  balance: "$2,474.46",
  age: 30,
  eyeColor: "blue",
  name: "Tameka Maxwell",
  gender: "female",
  company: "ENOMEN",
  email: "tamekamaxwell@enomen.com",
  phone: "+1 (902) 557-3898",
  tags: ["aliquip", "anim", "exercitation", "non"],
  friends: [
    {
      id: 0,
      name: "Barber Hicks",
    },
    {
      id: 1,
      name: "Santana Cruz",
    },
    {
      id: 2,
      name: "Leola Cabrera",
    },
  ],
};

const getInfoObj = ({ ...args }) => {
  const {
    balance,
    name,
    email,
    tags: [aliquip, , , non],
    friends: [{ name: name2 }],
  } = args;
  return `Balance: ${balance}, Name: ${name}, Email: ${email} tags: ${aliquip}, ${non}, friends: ${name2}`;
};
const result3 = getInfoObj(user);
// console.log(result3);

// fourth
/*С помощью оператора rest, из объекта user (из предыдущей задачи)
скопировать в новый массив значение следующих полей tags и friends.*/
const getNewArr = ({ ...user }) => {
  const { tags, friends } = user;
  const tagsFriends = [...tags, ...friends];
  return tagsFriends;
};

const result4 = getNewArr(user);
console.log(result4);
