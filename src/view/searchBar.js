import "./searchBar.css"

class SearchBar {
    constructor() {
        
    }

    returnSearchedPlace() {
        return new Promise((resolve) => {
            const searchBar = document.querySelector("#searchbar");
            const submitBtn = document.querySelector("#senden-button");

            submitBtn.addEventListener("click", (event) => {
                event.preventDefault();
                const searched = searchBar.value;
                resolve(searched);
            })
        })
    }
}

export default SearchBar;