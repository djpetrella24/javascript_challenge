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
  var button = d3.select("#filter-btn");

  // Create event handlers
  button.on("click", runEnter);

  // Complete the event handler function for the form
  function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Select the input element and get the raw HTML node
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(date => date.datetime === inputValue);
    tbody.html('');
    filteredData.forEach((UFO) => {
      var row = tbody.append("tr");
      Object.entries(UFO).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
  };