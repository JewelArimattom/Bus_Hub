//data for bus

const busCollection = [
  { 
      name: "KSRTC", 
      schedule: [
          { stop: "Pala", time: "06:15 AM" },
          { stop: "Pravithanam", time: "06:30 AM" },
          { stop: "Ullanad", time: "06:40 AM" },
          { stop: "Kayyoor", time: "07:05 AM" }
      ] 
  },
  { 
    name: "ST JUDE", 
    schedule: [
        { stop: "Plassnal", time: "06:15 AM" },
        { stop: "Nariyanganam", time: "06:30 AM" },
        { stop: "Pravithanam", time: "06:40 AM" },
        { stop: "Pala", time: "07:00 AM" }
    ] 
},
{ 
    name: "ST JUDE", 
    schedule: [
        { stop: "Plassnal", time: "06:30 AM" },
        { stop: "Nariyanganam", time: "06:45 AM" },
        { stop: "Pravithanam", time: "07:05 AM" }
    ] 
},
{ 
    name: "KSRTC", 
    schedule: [
        { stop: "Kayyoor", time: "07:10 AM" },
        { stop: "Ullanad", time: "07:25 AM" },
        { stop: "Pravithanam", time: "07:35 AM" },
        { stop: "Pala", time: "07:50 AM" },
        { stop: "Kottayam", time: "09:00 AM" }
    ] 
},
{ 
    name: "ST JUDE", 
    schedule: [
        { stop: "Pala", time: "07:30 AM" },
        { stop: "Pravithanam", time: "07:45 AM" },
        { stop: "Nariyanganam", time: "08:00 AM" },
        { stop: "Plassnal", time: "08:15 AM" },
        { stop: "Erattupetta", time: "08:30 AM" },
    ] 
},
{ 
    name: "Meenakshi", 
    schedule: [
        { stop: "Plassnal", time: "07:20 AM" },
        { stop: "Nariyanganam", time: "07:40 AM" },
        { stop: "Pravithanam", time: "07:55 AM" },
        { stop: "Pala", time: "08:10 AM" },
        { stop: "Cherpunkal", time: "08:40 AM" },
        { stop: "Ponkunnam", time: "09:30 AM" }
    ] 
},
{ 
    name: "MARIA", 
    schedule: [
        { stop: "Kottayam", time: "07:30 AM" },
        { stop: "Pala", time: "08:25 AM" },
        { stop: "Pravithanam", time: "08:40 AM" },
        { stop: "Nariyanganam", time: "08:50 AM" },
        { stop: "Plassnal", time: "09:00 AM" },
        { stop: "Collage Padi", time: "09:05 AM" },
        { stop: "Erattupetta", time: "09:20 AM" }
    ] 
},
{ 
    name: "ST JUDE", 
    schedule: [
        { stop: "Pala", time: "08:45 AM" },
        { stop: "Pravithanam", time: "09:10 AM" },
        { stop: "Nariyanganam", time: "09:20 AM" },
        { stop: "Plassnal", time: "09:25 AM" },
        { stop: "Collage Padi", time: "09:30 AM" },
        { stop: "Erattupetta", time: "09:40 AM" },
    ] 
},
{ 
    name: "ST JUDE", 
    schedule: [
        { stop: "Erattupetta", time: "08:45 AM" },
        { stop: "Collage padi", time: "08:50 AM" },
        { stop: "Panackapalam", time: "08:55 AM" },
        { stop: "Plassnal", time: "09:00 AM" },
        { stop: "Nariyanganam", time: "09:15 AM" },
        { stop: "Pravithanam", time: "09:30 AM" },
        { stop: "Pala", time: "09:45 AM" }
    ] 
},
{ 
    name: "MARIA", 
    schedule: [
        { stop: "Erattupetta", time: "09:35 AM" },
        { stop: "Collage padi", time: "09:40 AM" },
        { stop: "Panackapalam", time: "09:43 AM" },
        { stop: "Plassnal", time: "09:45 AM" },
        { stop: "Nariyanganam", time: "09:50 AM" },
        { stop: "Pravithanam", time: "10:00 AM" },
        { stop: "Pala", time: "10:15 AM" },
        { stop: "Kottayam", time: "11:00 AM" },
        
    ] 
},
{ 
    name: "KUZHITHOTTU", 
    schedule: [
        { stop: "Erattupetta", time: "08:15 AM" },
        { stop: "Collage padi", time: "08:17 AM" },
        { stop: "Panackapalam", time: "08:20 AM" },
        { stop: "Plassnal", time: "08:25 AM" },
        { stop: "Ullanad", time: "08:40 AM" },
        { stop: "Pravithanam", time: "08:45 AM" },
        { stop: "Pala", time: "09:00 AM" }
    ] 
},

  { 
      name: "EMIK", 
      schedule: [
          { stop: "Pala", time: "1:00 PM" },
          { stop: "Thodupuzha", time: "02:00 PM" },
          { stop: "Muvattupuzha", time: "03:00 PM" }
      ] 
  }
];



/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

///auto suggestion

const options = ["Pala", "Thodupuzha", "Muvattupuzha", "Pravithanam", "Erattupetta", "Cherpunkal", "Ponkunnam", "Collage Padi", "Panackapalam", "Ullanad", "Nariyanganam", "Kottayam","Plassnal",];

function showSuggestions(inputId, suggestionsDivId) {
    const input = document.getElementById(inputId);
    const suggestionsDiv = document.getElementById(suggestionsDivId);
    const query = input.value.toLowerCase();

    // Clear any existing suggestions
    suggestionsDiv.innerHTML = '';

    if (query) {
        // Filter options based on the input query
        const filteredOptions = options.filter(option => option.toLowerCase().includes(query));
        
        // Create suggestion items
        filteredOptions.forEach(option => {
            const suggestionItem = document.createElement("div");
            suggestionItem.classList.add("suggestion-item");
            suggestionItem.textContent = option;

            // Add click event to select suggestion
            suggestionItem.onclick = () => {
                input.value = option;
                suggestionsDiv.innerHTML = ''; // Clear suggestions after selection
            };

            // Append suggestion to the suggestions div
            suggestionsDiv.appendChild(suggestionItem);
        });
    }
}






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
