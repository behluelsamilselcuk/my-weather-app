class Weather {
    async getInfos(place) {
        try {
            const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${place}?key=${process.env.VISUAL_CROSSING_API_KEY}`);
            const cityData = await response.json();
            return cityData;
        } catch (err) {
            console.error(err);
        }
    }
}

export default Weather;