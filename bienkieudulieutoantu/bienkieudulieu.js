// Bài 1
let Physic = parseFloat(prompt("Nhập vào điểm Vật lý"));
let Chemistry = parseFloat(prompt("Nhập vào điểm Hóa học"));
let Biology = parseFloat(prompt("Nhập vào điểm Sinh học"));
let averageSubject = (Physic + Chemistry + Biology)/3;
let sumSubject = Physic + Chemistry + Biology;
document.write("The average subject is: " + averageSubject);
document.write("The sum subject is: " + sumSubject);

// Bài 2
let Celsius = parseFloat(prompt("Nhập vào độ C"));
let Fahrenheit = (Celsius * 9)/5 + 32;
document.write("The Fahrenheit is: " + Fahrenheit);

// Bài 3
let Radius = parseFloat(prompt("Nhập bán kính:"));
let circleArea = 3.14*Radius*Radius;
document.write("Area of the circle is: " + circleArea);
// Bài 4
let Radius = parseFloat(prompt("Nhập bán kính:"));
let circumferenceCircle = 2 * 3.14 * Radius;
document.write("Circumference of the circle is: " + circumferenceCircle);