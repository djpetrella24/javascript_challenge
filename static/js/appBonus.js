// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

tableData.forEach((UFO) => {
  var row = tbody.append("tr");
  Object.entries(UFO).forEach(([key, value]) => {
    var cell = row.append("td");
    cell.text(value);
  });
});
  // Select the form
  var button = d3.selectAll(".filter");

  // Create event handlers
  button.on("change", runEnter);
  
  inputDict = {}; 

  // Complete the event handler function for the form
  function runEnter() {
    let newData = tableData
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select(this).select('input');

    // Select the input element and get the raw HTML node
    var inputValue = inputElement.property("value");

    var inputID = inputElement.attr('id');
    inputDict[inputID] = inputValue;
    console.log(inputDict);
    Object.entries(inputDict).forEach(([key, value])=>{
        newData = newData.filter(date => date[key] === value);
    });

    tbody.html('');
    newData.forEach((UFO) => {
      var row = tbody.append("tr");
      Object.entries(UFO).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };