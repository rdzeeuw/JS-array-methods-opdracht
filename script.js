//Deel A
const superheroes = [
    {name: "Batman", alter_ego: "Bruce Wayne"}, 
    {name: "Superman", alter_ego: "Clark Kent"}, 
    {name: "Spiderman", alter_ego: "Peter Parker"}]
    
const findSpiderMan = superheroes.find( ({name}) => name === "Spiderman");
     
//console.log(findSpiderMan); 
// Find Spiderman
// result should be: {name: "Spiderman", alter_ego: "Peter Parker"}

//Deel B

const array1 = [1,2,3];
array1.forEach(myFunction);

function myFunction(item, index, arr) {
  arr[index] = item * 2;
}

// console.log(array1);

//using .map()
const array = [1,2,3];
const doubleArrayValues = array.map(doubleValues);

function doubleValues(num) {
  return num * 2;
}

// console.log(doubleArrayValues);

//deel C

const numberArray = [1,2,1,2,1,2];
const containsNumberBiggerThan10 = numberArray.some(checkBigNum);

function checkBigNum(num) {
  return num > 10;
}

// console.log(containsNumberBiggerThan10);


//Deel D
const countries = ['Canada', 'France','Germany','Italy','Japan','United Kingdom','United States'];
const isItalyInTheGreat7 = countries.includes('Italy');

//console.log(isItalyInTheGreat7);

//Deel E

const arrayWithNumbers = [1, 4, 3, 6, 9, 7, 11];
arrayWithNumbers.forEach(makeTenfold);

function makeTenfold(item, index, arrayWithNumbers) {
  arrayWithNumbers[index] = item * 10;
}

//console.log(arrayWithNumbers);

//Deel F
const integers = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 10, 11, 77, 84, 98 ];
const isBelow100 = integers.every((item) => {
  return item < 100
});

//console.log(isBelow100);

//Deel G
const bigArray = [];

function bigSum(bigArray){
  return bigArray.reduce((a, b) => a + b, 0);
}

//console.log(bigSum([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98, 101, 206, 234]));
