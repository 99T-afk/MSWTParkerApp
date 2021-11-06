//Locations as an object.  Export the object and call it. 

const Locations = [
    {"id" : 0, "name" : "Bournemouth", "distance" : "0.3 mi.", "weatherIcon" : "cloudy", "temp": "9"},
    {"id" : 1, "name" : "Boscombe", "distance" : "1.2 mi.", "weatherIcon" : "cloudy", "temp": "9"},
    {"id" : 2, "name" : "Poole", "distance" : "3 mi.", "weatherIcon" : "day-cloudy", "temp": "10"},
    {"id" : 3, "name" : "Southampton", "distance" : "22 mi.", "weatherIcon" : "rain", "temp": "8"},
    {"id" : 4, "name" : "Weymouth", "distance" : "30 mi.", "weatherIcon" : "day-sunny", "temp": "12"},
    {"id" : 5, "name" : "Portsmouth", "distance" : "45 mi.", "weatherIcon" : "day-sunny", "temp": "11"},
    {"id" : 6, "name" : "Hove", "distance" : "62 mi.", "weatherIcon" : "day-sunny", "temp": "11"},
    {"id" : 7, "name" : "Brighton", "distance" : "66 mi.", "weatherIcon" : "day-rain", "temp": "9"},
    {"id" : 8, "name" : "Dartmouth", "distance" : "70 mi.", "weatherIcon" : "day-sunny", "temp": "10"},
    {"id" : 9, "name" : "Kimmeridge", "distance" : "72 mi.", "weatherIcon" : "day-sunny", "temp": "11"},
    {"id" : 10, "name" : "Torquay", "distance" : "121 mi.", "weatherIcon" : "day-sunny", "temp": "8"},
    {"id" : 11, "name" : "Manchester", "distance" : "176 mi.", "weatherIcon" : "lightning", "temp": "7"},
    {"id" : 12, "name" : "Inverness", "distance" : "394 mi.", "weatherIcon" : "rains", "temp": "6"},
];

const getLocations = () => {
    return Locations;
}

export default getLocations;