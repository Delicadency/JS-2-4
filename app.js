const person = {
  name: "Anna",
  age: 40,
  father: {
    name: "Andrew",
    age: 67,
  },
};

const {
  father: { name: fathersName },
} = person;
const {
  father: { age: fathersAge },
} = person;
const { age: personsAge } = person;
console.log();
