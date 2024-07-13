async function getLocationFromCoords(lat, lon) {
    const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}&zoom=10&addressdetails=1`;
    
    try {
        const response = await fetch(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0' // Tambahkan header User-Agent
            }
        });
        
        if (response.ok) {
            const data = await response.json();
            const kecamatan = data.address.county || data.address.village || data.address.town;
            return kecamatan;
        } else {
            throw new Error('Request failed');
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

const latitude = -7.419747236128376;  // Koordinat latitude
const longitude = 109.19624539325419; // Koordinat longitude

getLocationFromCoords(latitude, longitude).then(kecamatan => {
    console.log(`Kecamatan: ${kecamatan}`);
});
