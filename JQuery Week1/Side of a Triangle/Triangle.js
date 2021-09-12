// JavaScript program to find the area of a triangle

const side1 = parseInt(prompt('Enter side1: '));
const side2 = parseInt(prompt('Enter side2: '));
const side3 = parseInt(prompt('Enter side3: '));

// calculate the semi-perimeter
const s = (side1 + side2 + side3) / 2;

//calculate the area
const areaValue = Math.sqrt(
    s * (s - side1) * (s - side2) * (s - side3)
);

console.log(
    `The area of the triangle is ${areaValue}`
);

// display  the Sides
const html = `<p>side1 = ${side1}</p>
    <p>side2 = ${side2}</p>
        <p>side3 = ${side3}</p>
           <p>The area of the triangle is = ${areaValue}</p>`;

document.write(html);