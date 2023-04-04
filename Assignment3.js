

const cars = [
  { make: "Toyota", model: "Corolla", year: 2010 },
  { make: "Honda", model: "Accord", year: 2015 },
  { make: "Ford", model: "Mustang", year: 2005 },
  { make: "Chevrolet", model: "Camaro", year: 2020 },
  { make: "Nissan", model: "Altima", year: 2012 }
];

cars.sort((a, b) => {
    return a.year - b.year;
})
console.log(cars)

