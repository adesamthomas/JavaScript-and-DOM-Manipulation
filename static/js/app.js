// data.js file data
var tableData = data;

// select table body
tbody = d3.select("tbody")

// use Object.entries to get key, value data inside of the table. loop through the data to add to the table
function displayData(data){
    tbody.text("")
    data.forEach(function(ufosighting){
    newRow = tbody.append("tr")
    Object.entries(ufosighting).forEach(function([key, value]){
        newRowData = newRow.append("td").text(value)
    })
})}

displayData(tableData)

var dateInput = d3.select("#datetime"); //variables for the date input:

var filterButton = d3.select("#filter-btn"); //variable for the filter button:

// filter data with date that the user inputs
function dateSelection(){

    d3.event.preventDefault();  //prevent refreshing the page

    console.log(dateInput.property("value")); //print the value (info for date that was input)
    //create a new table showing only the filterd data
    var newTableData = tableData.filter(ufosighting => ufosighting.datetime===dateInput.property("value"))
    displayData(newTableData);
}

// event listener to handle change when a new date is chosen and "filter table" button is clicked
dateInput.on("change", dateSelection)
