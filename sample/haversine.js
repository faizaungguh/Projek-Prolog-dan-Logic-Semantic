import haversine from 'haversine-distance'

const start = [-7.419747236128376,109.19624539325419]

const end = [-7.423705388571167, 109.22563684787822]

const distance = haversine(start, end).toFixed(2);
console.log(`${distance} km`);