
// from data.js

var tableData = data;
var tableBody = d3.select("tbody");


// print data because I want to make sure they're all talking to one another
console.log(data);

//I referenced a lot of part 5 of the student activity 3 - 3 to help me understand the logic and solve this portion. Javascript is for sure not my strength.
// create function to add in data, gonna call it addTable since I want to add this table into my HTML
// it's going to append date, city, state, country, shape, duration, and comments
 function addTable() {
tableData.forEach((addTable) => {
 // create new variable called "Datarow" that appends the table rows
var Datarow = tableBody.append("tr");
 Object.entries(addTable).forEach(([key, value]) => {
 // make the cell of the table read the values needed
var Datacell = Datarow.append("td");
 Datacell.text(value);
  });
 });
}

// call the function
addTable();


// for fun since I want confirmation that everything ran
console.log("Data is added in. Woot woot!");

// now that the data is added, it's time to make the table filter-able
// I used w3schools.com as a refrence to build this 
function searchForDate() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("datetime");
  filter = input.value.toString();
 table = document.getElementsByTagName("tbody")[0];
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
          console.log('tr')
      }
    }       
  }
}


//same thing for state
function searchForState() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("state");
  filter = input.value.toString();
    
    
table = document.getElementsByTagName("tbody")[0];
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
          console.log('tr')
      }
    }       
  }
}


//same thing for city
function searchForCity() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("city");
  filter = input.value.toString();
  // GetElementsByTagName returns HTMLCollection. Grab 0th item in list for tbody element.
  table = document.getElementsByTagName("tbody")[0];
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
          console.log('tr')
      }
    }       
  }
}