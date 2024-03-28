//QUESTION 1
// Get all the countries from Asia continent /region using Filter function

var req1 = new XMLHttpRequest();
req1.open("GET", "https://restcountries.com/v3.1/all", "true");
req1.send();
req1.onload = function () {
  var data = req1.response;
  var result = JSON.parse(data);
  var output = result.filter((ele) => console.log(ele.continents, ele.region));
};
//QUESTION 2
//Get all the countries with a population of less than 2 lakhs using Filter function

var req2 = new XMLHttpRequest();
req2.open("GET", "https://restcountries.com/v3.1/all", "true");
req2.send();
req2.onload = function () {
  var data1 = req2.response;
  var result1 = JSON.parse(data1);
  var total = result1.filter((elem) => elem.population < 200000);
  var final = total.map((elem) => console.log(elem.name.common));
};

//QUESTION 3
//Print the following details name, capital, flag, using forEach function

var req3 = new XMLHttpRequest();
req3.open("GET", "https://restcountries.com/v3.1/all", "true");
req3.send();
req3.onload = function () {
  var data2 = req3.response;
  var result2 = JSON.parse(data2);
  var total2 = result2.forEach((elemen) =>
    console.log(
      `names:${elemen.name.common},flag:${elemen.flag},capital:${elemen.capital}`
    )
  );
};

//QUESTION 4
//Print the total population of countries using reduce function

var req4 = new XMLHttpRequest();
req4.open("GET", "https://restcountries.com/v3.1/all", "true");
req4.send();
req4.onload = function () {
  var data3 = req4.response;
  var result3 = JSON.parse(data3);
  var output3 = result3.reduce((acc, cv) => acc + cv.population, 0);
  console.log(output3);
};

//QUESTION 5
//Print the country that uses US dollars as currency.

var req5 = new XMLHttpRequest();
req5.open("GET", "https://restcountries.com/v3.1/all", "true");
req5.send();
req5.onload = function () {
  var data4 = req5.response;
  var result4 = JSON.parse(data4);
  var output4 = result4.filter(
    (element) => element.currencies && element.currencies.USD
  );
  output4.forEach((element) => console.log(element.name.common));
};
