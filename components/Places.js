//Locations as an object.  Export the object and call it. 

const Locations = [
    {"id" : 0, "name" : "Bournemouth", "distance" : "0.3 mi.", "weatherIcon" : "cloudy", "temp": "9", "lat": 50.7113408, "long":-1.8966187},
    {"id" : 1, "name" : "Boscombe", "distance" : "1.2 mi.", "weatherIcon" : "cloudy", "temp": "9" ,"lat":50.7183068, "long":-1.856277},
    {"id" : 2, "name" : "Poole", "distance" : "3 mi.", "weatherIcon" : "day-cloudy", "temp": "10","lat":50.7113408 , "long":-1.8966187},
    {"id" : 3, "name" : "Southampton", "distance" : "22 mi.", "weatherIcon" : "rain", "temp": "8","lat":50.7113408 , "long":-1.8966187},
    {"id" : 4, "name" : "Weymouth", "distance" : "30 mi.", "weatherIcon" : "day-sunny", "temp": "12","lat":50.6099 , "long":-2.457621},
    {"id" : 5, "name" : "Portsmouth", "distance" : "45 mi.", "weatherIcon" : "day-sunny", "temp": "11","lat":50.805832 , "long":-1.087222},
    {"id" : 6, "name" : "Hove", "distance" : "62 mi.", "weatherIcon" : "day-sunny", "temp": "11","lat": 50.827778 , "long": -0.152778},
    {"id" : 7, "name" : "Brighton", "distance" : "66 mi.", "weatherIcon" : "day-rain", "temp": "9","lat": 50.827778 , "long": -0.15338},
    {"id" : 8, "name" : "Dartmouth", "distance" : "70 mi.", "weatherIcon" : "day-sunny", "temp": "10","lat": 50.352517 , "long": -0.152778},
    {"id" : 9, "name" : "Kimmeridge Bay", "distance" : "72 mi.", "weatherIcon" : "day-sunny", "temp": "11","lat": 50.5890309772, "long": -2.0584330996},
    {"id" : 10, "name" : "Torquay", "distance" : "121 mi.", "weatherIcon" : "day-sunny", "temp": "8","lat": 50.461921 , "long": -3.525315},
    {"id" : 11, "name" : "Manchester", "distance" : "176 mi.", "weatherIcon" : "lightning", "temp": "7","lat":53.483959 , "long": -2.244644},
    {"id" : 12, "name" : "Inverness", "distance" : "394 mi.", "weatherIcon" : "rains", "temp": "6","lat": 57.477772, "long":  -4.224721},
];

const getLocations = () => {
    return Locations;
}

export default getLocations;