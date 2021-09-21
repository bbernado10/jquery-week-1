  //get inputs and button element from document

  var lenEl = document.querySelector("#len");
  var widEl = document.querySelector("#wid");

  var calcBtn = document.querySelector("#calcBtn");

  var areagEl = document.querySelector("#area");
  var perimeterEl = document.querySelector("#perimeter");

  //bind a function tothe onClick event the AddBtn
  calcBtn.onclick = function() {

      //area formule length*width
      area = Number(lenEl.value) * Number(widEl.value)

      //perimeter formule 2*(length+width)
      perimeter = 2 * (Number(lenEl.value) + Number(widEl.value))


      //write the results into #area #perimeter document 
      areagEl.innerHTML = "Area of rectangle:" + area;
      perimeterEl.innerHTML = "Perimeter of rectangle:" + perimeter;
  }