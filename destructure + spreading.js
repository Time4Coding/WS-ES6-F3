const person = {
  name: "Baha",
  age: 28,
  hobbies: "Football",
  movies: {
    movieName: "Breaking Bad",
  },
};

const { name, hobbies } = person;
const { movieName } = person.movies;
const welcome = () => {
  return `Hello ${name}, I like your ${hobbies} Hobbies and your best movie is ${movieName}`;
};

const output = welcome();
console.log(output);

const tab = ["Baha", "Hamza", "Foulen"];
const [, , hamza] = tab;
// console.log(baha);
console.log(hamza);

//------------------ ...Spreading

const person2 = { ...person };
console.log(person2);
person2.name = "Hamza";
console.log(person);
console.log(person2);

const tab2 = tab.map((name) => "hello " + name);
tab2[2] = "Youssef";
console.log(tab);
console.log(tab2);
