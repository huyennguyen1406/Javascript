// Bài 1
let inputPhysic = parseInt(prompt("Nhập vào điểm Vật lý"));
let inputChemistry = parseInt(prompt("Nhập vào điểm Hóa học"));
let inputBiology = parseInt(prompt("Nhập vào điểm Sinh học"));
let averageSubject = (inputPhysic + inputChemistry + inputBiology)/3;
let sumSubject = inputPhysic + inputChemistry + inputBiology;
document.write("The average subject is: " + averageSubject);
document.write("The sum subject is: " + sumSubject);

// Bài 2
let inputCelsius = parseInt(prompt("Nhập vào độ C"));
let Fahrenheit = (inputCelsius * 9)/5 + 32;
document.write("The Fahrenheit is: " + Fahrenheit);

// Bài 3
let inputRadius = parseInt(prompt("Nhập bán kính:"));
let circleArea = 3.14*inputRadius*inputRadius;
document.write("The circle area is: " + circleArea);
// Bài 4
let inputRadius = parseInt(prompt("Nhập bán kính:"));
let circumferenceCircle = 2 * 3.14 * inputRadius;
document.write("Circumference of the circle is: " + circumferenceCircle);