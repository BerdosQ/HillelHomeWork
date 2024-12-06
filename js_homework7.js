var text = "Wonderful, Joyful, Happiness, Time, Task, Apple";
const regex = /\b[^Aa\s,]{6,}\b/g;
console.log (text.match(regex));
