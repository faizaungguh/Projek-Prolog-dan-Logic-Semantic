async function getLocationFromCoords(lat, lon, apiKey) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${lon}&key=${apiKey}`;

    try {
        const response = await fetch(url);
        
        if (response.ok) {
            const data = await response.json();
            if (data.results && data.results.length > 0) {
                const components = data.results[0].components;
                const kecamatan = components.county || components.village || components.town;
                return kecamatan;
            } else {
                throw new Error('No results found');
            }
        } else {
            throw new Error('Request failed');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

const latitude = -7.336749688256;  // Koordinat latitude
const longitude = 109.13733745355614; // Koordinat longitude
const apiKey = 'c3b6216858d1479fbc4ec425f3de0e37';  // Ganti dengan API Key Anda

getLocationFromCoords(latitude, longitude, apiKey).then(kecamatan => {
    console.log(`Kecamatan: ${kecamatan}`);
});
