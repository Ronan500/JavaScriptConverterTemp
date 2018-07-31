//The variable kelvin is a constant.
const kelvin = 377;
//The variable celsius is equal to kelvin - 273.
const celsius = (kelvin - 273);
//Convert celsius to fahrenheit, and round the result
//down from decimal
const Fahrenheit =  Math.floor(celsius * (9 / 5) + 32);
//Convert Celsius to Newton.
let Newton = celsius * (33/100);
Newton = Math.floor(Newton);

//Log results to console.

console.log(`The temperature is" "+Newton+" "degrees Newton`);

console.log(`The temperature is" "+Fahrenheit+" "degrees Fahrenheit`);

console.log(`The temperature is" "+celsius+" "degrees Celsius`);
