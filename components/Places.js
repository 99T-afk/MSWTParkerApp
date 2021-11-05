//Locations as an object.  Export the object and call it. 

const Locations = [
    {"id" : 0, "name" : "Bournemouth", "distance" : "0.3 miles"},
    {"id" : 1, "name" : "Boscombe", "distance" : "0.9 miles"},
    {"id" : 2, "name" : "Poole", "distance" : "1.3 miles"},
    {"id" : 3, "name" : "Southampton", "distance" : "2.1 miles"},
    {"id" : 4, "name" : "Weymouth", "distance" : "3 miles"},
    {"id" : 5, "name" : "Portsmouth", "distance" : "3.1 miles"},
    {"id" : 6, "name" : "Hove", "distance" : "3.2 miles"},
    {"id" : 7, "name" : "Cornwall", "distance" : "8 miles"},
    {"id" : 8, "name" : "Brighton", "distance" : "0.3 miles"},
    {"id" : 9, "name" : "Hammersmith", "distance" : "0.3 miles"},
    {"id" : 10, "name" : "Torquay", "distance" : "0.3 miles"},
    {"id" : 11, "name" : "Manchester", "distance" : "0.3 miles"},
    {"id" : 12, "name" : "Kent", "distance" : "0.3 miles"},
];

const getLocations = () => {
    return Locations;
}

export default getLocations;