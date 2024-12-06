var text = "Wonderful, Joyful, Happiness, Time, Task, Apple";
const regex = /\b[^Aa\s,]{6,}\b/g; // \s, підглянуто після того як виводило зайве
console.log (text.match(regex));

//----------------------
var arr = [
    {
        userName:"Test",
        lastName:"Test",
        email:"test.test@gmail.com"
    },
    {
        userName:"Dmitro",
        lastName:"Porohov",
        email:"dmitro.porohov@yahoo.com"
    },
    {
        userName:"Andrii",
        lastName:"",
        email:"andrii@mail.ru" // Нам такі не підходять
    },
];

const regex = /^[a-zA-Z0-9._%+-]+@((gmail\.com)|(yahoo\.com))$/; // ^$ піддивився, бо валідація не проходила

arr.forEach(value => {
    if (regex.test(value.email)) {
        console.log(value.email); // Виводимо тільки ті користувачі, чия електронна адреса підходить
    }
});
