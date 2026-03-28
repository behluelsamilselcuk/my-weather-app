import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import Weather from './model/weatherInformation';
import SearchBar from './view/searchBar';
import "./css/global.css"

// Das ist der Controller

// getWeatherInfos("frankfurt");
// getWeatherInfos(searchedPlace);
const searchBar = new SearchBar();
const weather = new Weather();

searchBar.onSubmit(async () => {
    const place = searchBar.getValue();
    const data = await weather.getInfos(place);
    console.log(data);
});