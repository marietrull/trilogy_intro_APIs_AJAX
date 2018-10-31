console.log("Javascript Connected");

//-------------Warmup Activity---------//
var customer = {
  firstName: "John",
  lastName: "Smith",
  age: 25,
  address: {
    streetAddress: "21 2nd Street",
    city: "New York",
    state: "NY",
    postalCode: "10021"
  },
  phoneNumber: [{
    type: "home",
    number: "212 555-1234"
  }, {
    type: "fax",
    number: "646 555-4567"
  }]
};

console.log("-----------Warmup Activity-----------")
// Step 1: Log the First Name below using console.log
console.log("Step One - Log the First Name: " + customer.firstName);
// Step 2: Log the Last Name below using console.log
console.log("Step Two - Log the Last Name: " + customer.lastName);
// Step 3: Log the State of the Address below using console.log
console.log("Step Three -  Log the State of the Address: " + customer.address.state);
// Step 4: Log the Home Phone Number below using console.log
console.log("Step Four - Log the Phone Number: " + customer.phoneNumber[0].number);
// Step 5: Log the Fax Number below using console.log
console.log("Steph Five - Log the Fax Number: " + customer.phoneNumber[1].number);

//-------------AJAX CALLS---------//

console.log("-----------AJAX CALLS-----------")

    $.ajax({
      url: "https://www.omdbapi.com/?t=romancing+the+stone&y=&plot=short&apikey=trilogy",
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });

    $.ajax({
      url: "https://www.omdbapi.com/?t=the+revenant&y=&plot=short&apikey=trilogy",
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });

    $.ajax({
      url: "https://www.omdbapi.com/?t=god+father&y=&plot=short&apikey=trilogy",
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });

    $.ajax({
      url: "https://www.omdbapi.com/?t=space+jam&y=&plot=short&apikey=trilogy",
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });

    $.ajax({
      url: "https://www.omdbapi.com/?t=boiler+room&y=&plot=short&apikey=trilogy",
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });

    $.ajax({
      url: "https://www.omdbapi.com/?t=inception&y=&plot=short&apikey=trilogy",
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });

    $.ajax({
      url: "https://www.omdbapi.com/?t=the+dark+night&y=&plot=short&apikey=trilogy",
      method: "GET"
    }).then(function(response) {
      console.log(response);
    });

    //-------------AJAX TO HTML ACTIVITY---------//


    // The below code fills in the first row of the table
    var movie = "Mr. Nobody";
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      // Create a new table row element
      var tRow = $("<tr>");

      // Methods run on jQuery selectors return the selector they we run on
      // This is why we can create and save a reference to a td in the same statement we update its text
      var titleTd = $("<td>").text(response.Title);
      var yearTd = $("<td>").text(response.Year);
      var actorsTd = $("<td>").text(response.Actors);
        
      // Append the newly created table data to the table row
      tRow.append(titleTd, yearTd, actorsTd);
      // Append the table row to the table body
      $("tbody").append(tRow);
    });

    var movie = "The Little Mermaid";
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var tBody = $("tbody");
      var tRow = $("<tr>");
      // Methods run on jQuery selectors return the selector that they run on
      // This is why we can create and save a reference to a td in the same statement we update its text
      var titleTd = $("<td>").text(response.Title);
      var yearTd = $("<td>").text(response.Year);
      var actorsTd = $("<td>").text(response.Actors);
      // Append the newly created table data to the table row
      tRow.append(titleTd, yearTd, actorsTd);
      // Append the table row to the table body
      tBody.append(tRow);
    });

    var movie = "The Lion King";
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var tBody = $("tbody");
      var tRow = $("<tr>");
      // Methods run on jQuery selectors return the selector they we run on
      // This is why we can create and save a reference to a td in the same statement we update its text
      var titleTd = $("<td>").text(response.Title);
      var yearTd = $("<td>").text(response.Year);
      var actorsTd = $("<td>").text(response.Actors);
      // Append the newly created table data to the table row
      tRow.append(titleTd, yearTd, actorsTd);
      // Append the table row to the table body
      tBody.append(tRow);
    });