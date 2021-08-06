
// Código del cuadrado
console.group('Cuadrado');
const squareSide = 5;
console.log(`Los lados del cuadrado miden: ${squareSide}cm`);

function squarePerimeter(side) {
  return side * 4;
}

console.log(`El perímetro del cuadrado mide: ${squarePerimeter(squareSide)}cm`);

function squareArea(side) {
  return side * side;
}

console.log(`El área del cuadrado mide: ${squareArea(squareSide)}cm^2`);
console.groupEnd('Cuadrado');

// Código del triángulo
console.group('Triángulo');
const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleBase = 4;
const triangleHeight = 5.5;

console.log(`Los lados del triángulo miden: ${triangleSide1}cm, ${triangleSide2}cm, ${triangleBase}cm`);

console.log(`La altura del triángulo mide: ${triangleHeight}cm`);

const trianglePerimeter = triangleSide1 + triangleSide2 + triangleBase;
console.log(`El perímetro del triángulo mide: ${trianglePerimeter}cm`);

const triangleArea = (triangleBase * triangleHeight) / 2;
console.log(`El área del triángulo mide: ${triangleArea}cm^2`);

console.groupEnd('Triángulo')


// Código del círculo
console.group('Círculo');
const circleRadio = 4;
const PI = Math.PI;
console.log(`El valor de PI es: ${PI}`);

console.log(`El radio del círculo mide: ${circleRadio}cm`);

const circleDiameter = circleRadio * 2;
console.log(`El diámetro del círculo mide: ${circleDiameter}cm`);

const ciclePerimeter = circleDiameter * PI;
console.log(`El perímetro del círculo mide: ${ciclePerimeter}cm`);

const circleArea = (circleRadio * circleRadio) * PI;
console.log(`El área del círculo mide: ${circleArea}cm^2`);

console.groupEnd('Triángulo')