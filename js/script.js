// Øvelse 1 
let arr1 = ["Datsun", "Mercedes", "Volvo", "BMW", "Fiat", "Toyota", "Citroen", "Tesla", "Opel"]; 
document.getElementById("demo").innerHTML = arr1.toString()
console.log(arr1)

// Øvelse 2 
let arr2 = ["Datsun", "Mercedes", "Volvo", "BMW", "Fiat", "Toyota", "Citroen", "Tesla", "Opel"]; 
arr2.pop()
console.log(arr2)

// Øvelse 3
let arr3 = ["Datsun", "Mercedes", "Volvo", "BMW", "Fiat", "Toyota", "Citroen", "Tesla", "Opel"]; 
arr3.push("Mazda")
console.log(arr3)

// Øvelse 4 
let arr4 = ["Datsun", "Mercedes", "Volvo", "BMW", "Fiat", "Toyota", "Citroen", "Tesla", "Opel"]; 
arr4.shift()
console.log(arr4)

// Øvelse 5
let arr5 = ["Datsun", "Mercedes", "Volvo", "BMW", "Fiat", "Toyota", "Citroen", "Tesla", "Opel"]; 
let nissan = arr5.unshift("Nissan")
console.log(arr5)

// Øvelse 6
let arr6 = ["Datsun", "Mercedes", "Volvo", "BMW", "Fiat", "Toyota", "Citroen", "Tesla", "Opel"]; 
arr6.splice(5, 0, "Kia", "Seat", "Peugeot")
console.log(arr6)

// Øvelse 7
let arr7 = ["Datsun", "Mercedes", "Volvo", "BMW", "Fiat", "Kia", "Seat", "Peugeot", "Toyota", "Citroen", "Tesla", "Opel"]; 
let newArr = arr7.slice(4,5)
let newArr2 = arr7.slice(7,11)
console.log(arr7)
console.log(newArr)
console.log(newArr2)
// Usikker om det var sådan du mente op øvelse 7. 