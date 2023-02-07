//                Day 7 Array Methods:

// Solving problems using array functions on the rest countries' data (https://restcountries.com/v3.1/all).


// 1.Get all the countries from the Asia continent region using the Filter function
// 2.Get all the countries with a population of less than 2 lakhs using Filter function
// 3.Print the following details name, capital, flag using forEach function
// 4.Print the total population of countries using reduce function
// 5.Print the country which uses US Dollars as currency.

// 1.Get all the countries from the Asia continent region using the Filter function:

// let request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v3.1/all");
// request.send();
// request.onload = function () {
//   let data = request.response;
//   let result = JSON.parse(data);
//   let arr = result.filter((ele) =>ele.continents[0]==="Asia");
//  let x = arr.map((ele)=>ele.name.common);
//  console.log(x);
// }

// 2.Get all the countries with a population of less than 2 lakhs using Filter function
//initiate the xmlHttpRequest:

// let request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v3.1/all");
// request.send();
// request.onload = function () {
//   let data = request.response;
//   let result = JSON.parse(data);
//   let arr = result.filter((ele) =>ele.population>200000);
//   let humanWealthy = arr.map((ele)=>ele.name.common)
// console.log(humanWealthy);
// }

// 3.Print the following details name, capital, flag using forEach function

// let request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v3.1/all");
// request.send();
// request.onload = function () {
//   let data = request.response;
//   let result = JSON.parse(data);
// function retriever (obj){
//     return `${obj.name.common} || ${obj.capital}|| ${obj.flag}`
//   }
//   let details = result.forEach((x)=>{
//     console.log(retriever(x));
//   });
// }

// 4.Print the total population of countries using reduce function;

// let request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v3.1/all");
// request.send();
// request.onload = function () {
//   let data = request.response;
//   let result = JSON.parse(data);
//   let populationArr = result.map((ele) => ele.population);
//   let totalPopulation = populationArr.reduce((acc, cv) => {
//     return acc + cv;
//   }, 0);
//   console.log(totalPopulation);
// }


// 5.Print the country which uses US Dollars as currency.
// let request = new XMLHttpRequest();
// request.open("GET", "https://restcountries.com/v3.1/all");
// request.send();
// request.onload = function () {
//   let data = request.response;
//   let result = JSON.parse(data);
//   // console.log(result);
//   let arr = result.filter((ele) => ele.currencies.USD.symbol==="$")
//   let x = arr.map((ele) => ele.name.common);
//   console.log(x);
// }