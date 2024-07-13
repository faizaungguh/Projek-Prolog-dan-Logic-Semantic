async function getLocationFromCoords(lat, lon, apiKey) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lon}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        
        if (response.ok) {
            const data = await response.json();
            if (data.status === "OK") {
                const results = data.results;
                for (let i = 0; i < results.length; i++) {
                    const addressComponents = results[i].address_components;
                    for (let j = 0; j < addressComponents.length; j++) {
                        const types = addressComponents[j].types;
                        if (types.includes("administrative_area_level_2")) {
                            return addressComponents[j].long_name;
                        }
                    }
                }
            } else {
                throw new Error(`Geocoding failed: ${data.status}`);
            }
        } else {
            throw new Error('Request failed');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

const latitude = -7.5174;  // Koordinat latitude
const longitude = 109.2939; // Koordinat longitude
const apiKey = 'AIzaSyBPAXdx0-ZoxDaa8pGK5YIP6TcuEDwwYWA';  // Ganti dengan API Key Anda

getLocationFromCoords(latitude, longitude, apiKey).then(kecamatan => {
    console.log(`Kecamatan: ${kecamatan}`);
});
