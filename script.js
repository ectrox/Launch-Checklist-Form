// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
const pilotName = document.getElementById('pilotName');
const copilotName = document.getElementById('copilotName');
const fuelLevel = document.getElementById('fuelLevel');
const cargoMass = document.getElementById('cargoMass');
const formSubmit = document.getElementById('formSubmit');

formSubmit.addEventListener('click',function(event) {
   if (pilotName.value ==='' || copilotName.value==='' || fuelLevel.value==='' || cargoMass.value==='') {
      alert('All field are required!');
      event.preventDefault();
   }
});
console.log(pilotName.value);