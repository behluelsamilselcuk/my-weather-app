import "./searchBar.css"

class SearchBar {
    constructor() {
        this.searchBar = document.querySelector("#searchbar");
        this.submitBtn = document.querySelector("#senden-button");
    }

    getValue() {
        return this.searchBar.value;
    }

    onSubmit(callback) {
        this.submitBtn.addEventListener("click", (event) => {
            event.preventDefault();
            callback();
        })
    }
}

export default SearchBar;