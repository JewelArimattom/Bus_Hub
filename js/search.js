//data for bus

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
    name: "Bus 101", 
    schedule: [
        { stop: "Downtown", time: "08:00 AM" },
        { stop: "Midtown", time: "08:15 AM" },
        { stop: "Uptown", time: "08:30 AM" }
    ] 
},
{ 
    name: "Bus 101", 
    schedule: [
        { stop: "Downtown", time: "08:00 AM" },
        { stop: "Midtown", time: "08:15 AM" },
        { stop: "Uptown", time: "08:30 AM" }
    ] 
},
{ 
    name: "Bus 101", 
    schedule: [
        { stop: "Downtown", time: "08:00 AM" },
        { stop: "Midtown", time: "08:15 AM" },
        { stop: "Uptown", time: "08:30 AM" }
    ] 
},
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



/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////





//find bus

function findBus() {
    const place = document.getElementById("placeInput").value.toLowerCase();
    const destination = document.getElementById("destinationInput").value.toLowerCase();
    const timeOfDay = document.getElementById("timeOfDay").value;

    // Define time ranges for each time of day category
    const timeRanges = {
        earlyMorning: { start: "04:00", end: "07:59" },
        morning: { start: "08:00", end: "11:59" },
        afternoon: { start: "12:00", end: "15:59" },
        evening: { start: "16:00", end: "19:59" },
        night: { start: "20:00", end: "23:59" },
        lateNight: { start: "00:00", end: "03:59" }
    };

    // Filter buses where both starting place and destination exist in the schedule and are in the correct order
    const result = busCollection.filter(bus => {
        const startIndex = bus.schedule.findIndex(entry => entry.stop.toLowerCase() === place);
        const endIndex = bus.schedule.findIndex(entry => entry.stop.toLowerCase() === destination);
        
        // Check if both stops exist and are in the correct order
        if (startIndex === -1 || endIndex === -1 || startIndex >= endIndex) {
            return false;
        }

        // If a time of day is selected, filter based on the time range
        if (timeOfDay && timeRanges[timeOfDay]) {
            const startTime = bus.schedule[startIndex].time;
            const { start, end } = timeRanges[timeOfDay];
            return isTimeWithinRange(startTime, start, end);
        }

        return true;  // Return true if no time filtering is needed
    });

    displayResult(result, place, destination);
}

function isTimeWithinRange(busTime, startTime, endTime) {
    // Convert time to 24-hour format for easier comparison
    const busTime24 = convertTo24HourFormat(busTime);
    return busTime24 >= startTime && busTime24 <= endTime;
}

function convertTo24HourFormat(time) {
    // Assume time format is "HH:MM AM/PM" and convert it to 24-hour "HH:MM" format
    const [timePart, modifier] = time.split(" ");
    let [hours, minutes] = timePart.split(":");

    if (modifier === "PM" && hours !== "12") {
        hours = parseInt(hours, 10) + 12;
    }
    if (modifier === "AM" && hours === "12") {
        hours = "00";
    }

    return `${hours}:${minutes}`;
}

function displayResult(result, place, destination) {
    const resultDiv = document.getElementById("result");
    if (result.length > 0) {
        resultDiv.innerHTML = result.map(bus => {
            const startIndex = bus.schedule.findIndex(entry => entry.stop.toLowerCase() === place);
            const endIndex = bus.schedule.findIndex(entry => entry.stop.toLowerCase() === destination);

            const routeSegment = bus.schedule.slice(startIndex, endIndex + 1);
            return `
                <p><strong>${bus.name}</strong></p>
                <ul>
                    ${routeSegment.map(stop => `<li>${stop.stop} at ${stop.time}</li>`).join('')}
                </ul>
            `;
        }).join('');
    } else {
        resultDiv.innerHTML = "<p>No buses found for this route and time.</p>";
    }
}
