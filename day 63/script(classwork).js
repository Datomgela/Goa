const myObject = {
    method: function() {
      return "Hello";
    },
    properties: {
      property1: "gio",
      property2: "nika"
    }
  };
  
const myAge = 15;
  
const reference = myObject;
  
console.log(myObject.method());
console.log(myAge);
console.log(reference.properties.property1);

//sololearn
function main() {
    let flightNumber = readLine();
    let flightStatus = readLine();
    
    const flight1 = new plane(flightNumber, flightStatus);
    
    console.log('The flight ' + flight1.number + ' is ' + flight1.status)
    
}

function plane(flightNumber, status) {
    this.number = flightNumber;
    this.status = status;
};