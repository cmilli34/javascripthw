// from data.js
// YOUR CODE HERE!


// from data.js
var tableData = data;
var tbody = d3.select("tbody");
var submit = d3.select("#filter-btn");

// create function to add in data
function addTable() {
    data.forEach((rowofdata) => {
       // create new variable called "Datarow" that appends the table rows
        var Datarow = tbody.append("tr");
        Object.entries(rowofdata).forEach(([key, value]) => {
           // make the cell of the table read the values needed
            var Datacell = tbody.append("td");
            Datacell.text(value);
        });
    });
}
addTable();


// now that the data is added, it's time to make the button look for dates

