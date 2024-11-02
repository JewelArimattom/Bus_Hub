/*function find() {
    let input = document.getElementById("input").value
    let destination = document.getElementById("destination").value
     input = input.toLowerCase();
     destination = destination.toLowerCase();
    //console.log(input);
      
}*/
const busCollection = [
  { 
      name: "Bus 101", 
      schedule: [
          { stop: "Downtown", time: "08:00 AM" },
          { stop: "Midtown", time: "08:15 AM" },
          { stop: "Uptown", time: "08:30 AM" }
      ] 
  },
  { 
      name: "Bus 102", 
      schedule: [
          { stop: "Eastside", time: "09:30 AM" },
          { stop: "City Center", time: "09:45 AM" },
          { stop: "Westside", time: "10:00 AM" }
      ] 
  },
  { 
      name: "Bus 103", 
      schedule: [
          { stop: "North End", time: "10:45 AM" },
          { stop: "City Center", time: "11:00 AM" },
          { stop: "South End", time: "11:15 AM" }
      ] 
  }
];


function findBus() {
  const place = document.getElementById("input").value.toLowerCase();
  const destination = document.getElementById("destination").value.toLowerCase();

  // Filter buses 
  const result = busCollection.filter(bus => {
      const startIndex = bus.schedule.findIndex(entry => entry.stop.toLowerCase() === place);
      const endIndex = bus.schedule.findIndex(entry => entry.stop.toLowerCase() === destination);
      return startIndex !== -1 && endIndex !== -1 && startIndex < endIndex;
  });

  displayResult(result, place, destination);
}

function displayResult(result, place, destination) {
  const resultDiv = document.getElementById("result");
  if (result.length > 0) {
      resultDiv.innerHTML = result.map(bus => {
         
          const startIndex = bus.schedule.findIndex(entry => entry.stop.toLowerCase() === place);
          const endIndex = bus.schedule.findIndex(entry => entry.stop.toLowerCase() === destination);

          const routeSegment = bus.schedule.slice(startIndex, endIndex + 1);

          // Format the output for this bus
          return `
              <p><strong>${bus.name}</strong></p>
              <ul>
                  ${routeSegment.map(stop => `<li>${stop.stop} at ${stop.time}</li>`).join('')}
              </ul>
          `;
      }).join('');
  } else {
      resultDiv.innerHTML = "<p>No buses found for this route.</p>";
  }
}
