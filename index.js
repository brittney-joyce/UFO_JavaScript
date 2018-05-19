// reference elements for the input fields
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state")
var $countryInput = document.querySelector("#country");
var $searchBtn = document.querySelector("#search");

// Add an event listener to the searchButton
$searchBtn.addEventListener("click", handleSearchButtonClick);

// address dataset
var filteredUFO = dataSet;

// render to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  console.log("render is happening")

  for (var i = 0; i < filteredUFO.length; i++) {
    
    // Get get the current sighting object and its fields
    var sighting = filteredUFO[i];
    var fields = Object.keys(sighting);
    // Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For every field in the address object, create a new cell at set its inner text to be the current value at the current address's field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {
  // Format the user's search by removing leading and trailing whitespace, lowercase the string
  var filterDate = $dateInput.value.trim();
  var filterState = $stateInput.value.trim().toLowerCase();

  if (filterDate.length != 0){
    filteredUFO = dataSet.filter(function(sighting) {
      var sightingDate = sighting.datetime;
       return sightingDate === filterDate;
         });
  }
  else {
    filteredUFO = dataSet
  }
  if (filterState.length != 0){
    filteredUFO = filteredUFO.filter(function(sighting) {
      var sightingState = sighting.state;
       return sightingState === filterState;
         });
  }
  else {
    filteredUFO = filteredUFO
  }
  renderTable();
}

// Render the table for the first time on page load
renderTable();