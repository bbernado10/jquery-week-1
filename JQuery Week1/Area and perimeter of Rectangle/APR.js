 // JavaScript program to find the lenth, width, perimeter and of a triangle

 function myFunction() {

     var length = prompt("Enter a whole number for the length of your rectangle.");
     var width = prompt("Enter a whole number for the width of your rectangle.");
     var depth = prompt("Enter a whole number for the depth of your rectangle prism");

     // calculate the perimeter
     var perimeter = (2 * length) + (2 * width);
     // calculate the area   
     var area = length * width;
     // calculate the volume
     var volume = length * width * depth;
     // display the code
     document.getElementById("a").innerHTML =
         "Area of rectangle:" + area;
     document.getElementById("p").innerHTML =
         "perimeter of rectangle:" + perimeter;
     document.getElementById("v").innerHTML =
         "volume of rectangle prism:" + volume;
 }