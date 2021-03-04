function formatCities(capitals) {
    let sentence = [];
    for (let place of capitals) {
        if (place.city) {
            sentence.push(`${place.city} is the capital of ${place.country}`)
        }
    }
    return sentence;
}

module.exports = formatCities;