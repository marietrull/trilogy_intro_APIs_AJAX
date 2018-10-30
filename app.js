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