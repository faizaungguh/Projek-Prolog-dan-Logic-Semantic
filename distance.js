import haversine from 'haversine'

const start = {
    latitude: -7.419747236128376,
    longitude:109.19624539325419
}

const end = {
    latitude: -7.423705388571167 ,
    longitude: 109.22563684787822
}

const distance = haversine(start, end).toFixed(2);
console.log(`${distance} km`);