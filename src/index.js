import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import getWeatherInfos from './model/weatherInformation';
import SearchBar from './view/searchBar';
import "./css/global.css"

// Das ist der Controller

// getWeatherInfos("frankfurt");
// getWeatherInfos(searchedPlace);

async function search() {
    const search = new SearchBar();
    const searchedPlace = await search.returnSearchedPlace()
    getWeatherInfos(searchedPlace);
}

search()
