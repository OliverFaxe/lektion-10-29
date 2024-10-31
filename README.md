# lektion-10-29

## Arrays
 En array är en samling av massa data. " En Lista "
 
 Squarebrackets `[ ]` i arrayen har man items/elements som är separerade med ett kommateckan. ungefär såhär:

```js
// Array med nummer
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

```js
// JS tillåter olika typer i en Array. Men bäst att ha det kategoriserat.
["Niklas", "Henrik", 10, 2, 1, true];
```

```js
// Så här är bättre, En data-typ per Array.
["Oliver", "Kenneth", "Charlie"];
```

### Skapa Array
 För att skapa en array, skapar man en variable och deklarerar det till en array.

```js
const numbers = [1, 2, 3, 4];
```
När man skapar en array såhär så skapas arrayen i en variable och sparar innehållet i en array. Referensen kallas pointer eftersom den pekar till innehållet.

### Komma åt elementen i en Array

Det finns två sätt att komma åt elementen i en Array. Den första är vanligast och det är att komma åt genom `index`. Varje elementen i en Array är tilldelad en index position. Det börjar alltid på noll.

Vi refererar variablen som pekar till arrayen och kommer åt den med en index med hjälp av `[ ]`

```js
const numbers = [1, 2, 3, 4];

console.log(numbers[0]); // Då kommer 1
```

```js
const numbers = [1, 2, 3, 4];

console.log(numbers[2]); // Då kommer 3
```

Det andra sättet att komma åt ett element i en array är en metod som heter `at()` 

```js
const colors = ["Red", "Green", "Blue", "Orange"];

console.log(colors.at(0)); // Då kommer Red

console.log(colors.at(3)); // Då kommer Orange

console.log(colors.at(-2)); // Räknas från höger håll neråt - Detta blir Blå.
```
Det som är bra med `at()` metoden är att det tillåter negative values. Så om du ger ett negative value. Kommer det "räkna" från slutet av arrayen.


### Modifera elementen i en Array

För att ändra en element behöver vi veta dens `index` position och sen kan vi använda square brackets för att komma åt den och modifiera den. På detta sätt under "modifierar vi ursprungs-arrayen till skillnad mot det andra sättet."

```js
const colors = ["Red", "Green", "Blue", "Orange"];

colors[0]="Yellow";
console.log(colors)
// Yellow, Green, Blue, Orange
````

Vi kan också uppdatera ett element av en array med `with()` Skillnaden är att denna moetod tar två parameter. Första är index positionen vi vill ändra. Den andra är nya värdet / value som vi vill ge elementet. Sen kommer en kopia av array tillbaka till oss.

```js
const colors = ["Red", "Green", "Blue", "Orange"];

const updatedColors = colors.with(1, "Pink");
console.log(colors); // Red Green Blue Orange - Gamla array
console.log(updatedColors); // Red Pink Blue Orange -Nya modifierade Arrayen
```

### Properties av Arrays

Egenskaper som man kan komma åt exempelvis med `.length`
Med detta kan man se längden i nummer hur arrayen är. Exempelvis så här
```js
const length = colors.length // Här sparar vi bara värdet i en const
console.log(length);
// ------
console.log(colors.length) // Annat sätt om man vill skriva mindre kod
// 4
```

### Array Metoder

En metod är en instruktion / operation som vi ofta behöver göra. Men istället för att skriva koden finns det något vi kan anropa.

#### push(item1, item2, item...) => Nya längden av Array

Lägger till ett element i slutet av en existerande array.
Det tar en eller flera parametrar. Och dessa parametrar är de nya elementen som ska läggas till. Det returerar också nya längden av arrayen.

```js
const numbers = [1, 2, 3, 4, 5]

// Lägger en 6 till slutet
numbers.push(6);

console.log(numbers);
// 6 [1, 2, 3, 4, 5, 6]
```

```js
const numbers [1, 2, 3, 4, 5]

// Lägger en 10 till slutet
numbers.push(10);

console.log(numbers);
// 6 [1, 2, 3, 4, 5, 10]
```

#### pop() => Borttagna elementet

Används för att ta bort det sista elementet i en array. Elementet som blev bortaget blir också returerad av metoden. Inga parametrar inom ( )

```js
const cities = ["Stockholm", "Göteborg", "Malmö", "Lund"];

// Ta bort det sista elementet och returerar vad som blir borttaget
cities.pop();
console.log(cities);

// Stockholm, Göteborg, Malmö
```

#### unshift(item1, item2, item...) => Nya längden av array

Används för att tillägga ett element i början på en Array istället för slutet. Samma som push fast i början av arrayen.

```js
const cities = ["Stockholm", "Göteborg", "Malmö", "Lund"]

cities.unshift("Linköping");
console.log(cities);

// => 6
// Linköping Stockholm Göteborg Malmö Lund
```

#### shift() => Borttagna elementet

Används för att ta bort elementet från början av en Array. Returerar det borttagna elementet. Samma som pop fast i början av arrayen.

```js
const cities = ["Stockholm", "Göteborg", "Malmö", "Lund"]

cities.shift();
console.log(cities);

// => Stockholm
// Göteborg Malmö Lund
```

#### includes(item) => boolean

Används för att kontrollera om en item/element finns i en Array eller inte. Parametern är item/elementet som vi letar efter och returerar antingen True eller False

```js
const numbers = [2, 4, 6, 8, 10];

if (numbers.includes(6)) {
    console.log("The number 6 exists in the array");
} else {
    console.log("There is no number 6 in the array");
}

const number8Exists = numbers.include(8);

if (number8Exists) {
    // Do something if the number 8 exists.
}
```

#### indexOf(item) => the index position ELLER -1 om det inte finns.

Används för att hitta en index position av ett item/element i en Array. Om det finns retureras index som ett nummer. Om det inte finns `-1` är returerad.

```js
const cities = ["Stockholm", "Göteborg", "Malmö", "Lund"]

const indexOfMalmo = cities.indexOf("Malmö");
console.log(cities);
console.log(indexOfMalmö);
// => Index position 2
```

#### join("separator?") => En string av alla element

Används för att konvertera elementen till en string som innehåller elementen. Kan vara nummer, strings eller vad som. Metoden gör allt till en lång string. Parametern är en character som kan användas för att separera elementen i stringen. Det kan vara space, dash, underscore ex. Separatorn är valfritt.

```js
const cities = ["Stockholm", "Göteborg", "Malmö", "Lund"]

const citiesAsString = cities.join();

console.log(citiesAsString);

// Stockholm,Göteborg,Malmö,Lund
```

Om vi inte specifierar en separator, av default varje element blir separerade med ett komma-tecken.

#### splice(start, deleteCount, item1?, item2?, ...) => Returns an Array of the removed elements

Splice metoden låter oss modifiera innehållet av en array på vilken index position som helst. 

Det tar flera parametrar. Första är index vart vi vill börja våra modifiering.

Nästa är delete count, hur många element vill vi ta bort? Om vi inte vill ta bort någonting, deklarerar vi 0 till denna parameter. Om vi ta bort något så börjar det raderas från `start` parametern. Med andra ord, index positionen vi bestämde i `start`

Tredje är (eller fler) är det nya items/elements vi skulle vilja lägga in i Array.

Return value är en ny array med borttagna element. Om inget var borttaget så är det en tom array som retureras.

```js
const countries = ["Sweden", "Denmark", "Finland", "Norway", "Iceland"];

countries.splice(1, 1);
console.log(countries);
// Sweden, Finland, Norway, Iceland
```

```js
const countries = ["Sweden", "Denmark", "Finland", "Norway", "Iceland"];

countries.splice(3, 1, "Germany");
console.log(countries);
// Sweden, Denmark, Finland, Germany, Iceland
```

## Loops

### While loop

Bra när man inte vet hur mycket man behöver repetera det i förväg.

Syntax
```js
let siffra = 0; // initialValue

while (siffra < 100){ // condition
    siffra++; // change

    console.log(siffra);
}

console.log("Loop har avslutats");
```

```js
let siffra = 0;

while (siffra < 100){
    siffra++;

    console.log(siffra);

    if (count == 47) {
        console.log("47 är bra nog!");
        break;
    }
}

console.log("Loop har avslutats");
```

### Do-while loop

Kör en gång endå innan en loop kan köras med hjälp av vilka conditions alltså i while(count === 0) ex.

```js
let count = 0;

do {
    count++; // körs en gång utan condition
    console.log(count);
}   while (count === 0) // i detta fall blir det falskt & skippar condition
```



### For-loop with index

Klassisk loop som används när du vet i förväg hur många gånger den ska köras. Speciellt med lists eller arrays.

Syntax
```js
for (initialValue; condition; change) {
    // Code to be executed in each iteration
}
```

Exempel med Array
```js
const numbers = [5, 2, 10, 15, 27, 99]

for(let i = 0; 1 < numbers.length; i++) { // i = 0 variabel för att börja på index position 0

    console.log(numbers[i]);

}
```

The `intitalValue` är värdet på index vi startar loopen på. I detta fallet startar vi på index position 0. Första elementet/item i array.

The `condition` är i detta fallet `.length` metoden av array. Det kommer alltid vara lika med hur många items/elements är i arrayen.

The `change` är bara hur vi uppdaterar index värdet efter varje iteration.

Annat exempel:
```js
const numbers = [5, 2, 10, 15, 27, 99]

for(let i = numbers.length - 1; i>=0; i--) { // numbers.length - 1 eftersom numbers.length har 6. det finns bara 0-5 index positioner.

    console.log(numbers[i]);

}
```

### For..of-loop

Används när vi är inte intresserade av index utan bara själva item i array

Syntax
```js
for (variable of array) { // variable can be named whatever
    // Code to be executed in each interation
}
```

Example with car names:
```js
const cars = ["Volvo", "Saab", "Volkswagen", "BMW"];

for (const car of cars) {
    console.log(car);
}
// => Volvo, Saab, Volkswagen, BMW
```

`variable car` är en lokal variabel som skapas i varje iteration.

### For..in-loop

Loop för objekt, kommer senare.

## Functions

Ett stycke kod som vi har samlat ihop i en enhet i syftet att återanvändas.

### Create functions

Det finns tre "sätt" att skapa funktioner i JavaScript. Två av dem är liknande, en av dem är annorlunda.

### 1. with the function keyword HOISTED TO TOP
Syntax
```js
function functionName (/* zero or more parameters */) {
    // The code to be executed.

    // zero or ONE return value
    return something;
}
```

Exempel på greeting function
```js
function greeting () {
    console.log("Hello there!");
}
```
Hur du anropar funktionen i consolen:
```js
greeting()

// => "Hello there!"
```

Sammanfattas:

- `function`: keyword i JS, används i JS för att berätta att en funktion ska bli deklarerad.

- `functionName`: ett namn av funktionen. Använd ett namn som beskriver lätt funktionen.

- `parameters`: kallas också "arguments" ibland, det är datan som funktionen behöver för att fungera ordentligt. Det kan vara inga eller fler av dem.

- `return value`: värdet som ska bli returned från funktionen. Du behöver inte ett return value för att bara köra kod. Men du kan bara ha `1` return value om det behövs.

### 2. with a variable and the function keyword.
Syntax
```js
const functionName = function (/* zero or more parameters */) {
    // code to be executed

    // zero or ONE return value
    return something;
}

```


```js
const greeting = function() {
    console.log("Hello There!");
}
```

### 3. with an arrow function
Syntax
```js
const functionName = (/* zero or more parameters */) => {
    // code to be executed.

    // zero or ONE return value
    return something;
}
```
Exempel
```js
const greeting = () => {
    console.log("Hello there!");
}
```

### Functions with parameters

```js
function greetWithName (name) 
    // with template literal string $ we can inject variables in to the string.
    console.log(`Hello ${name}!`);
```

Exempel med kalkylator
```js
function addTwoNumbers(num1, num2) {
    const result = num1 + num2;
    console.log(`The result is ${result}`);
}
```

### Functions with return value

```js
function giveMeTheNumber7 (){
    return 7;
}

const number = giveMeTheNumber7();

// <= number
// => 7
```
Här returerar funktionen en specifik nummer. I detta fall 7. Det betyder att vi kan skapa en variabel som är lika med funktionen. Som kommer tilldelas return value av funktionen.

### Function with both parameters & return value

Här har vi en funktion med både parametrar och return value.

```js
function divide(num1, num2) {
    const result = num1 / num2;
    return result;
}

const result = divide(10, 2);
```











