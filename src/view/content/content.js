import "./content.css";

class Content {
    constructor() {
        this.searched_city = document.querySelector("#searched-city");
        this.timezone = document.querySelector("#timezone");
        this.temperature = document.querySelector("#temperature");
        this.description = document.querySelector("#description");
        this.next_days = document.querySelector("#next-days");
    }

    render(obj) {
        const data = obj;
        const days = data.days;

        this.searched_city.textContent = data.address;
        this.timezone.textContent = data.timezone;
        this.temperature.textContent = data.currentConditions.temp;
        this.description.textContent = data.description;
        days.forEach(day => {
            const li = document.createElement("li");
            const date = document.createElement("p");
            const temperature_of_day = document.createElement("p");
            const description_of_day = document.createElement("p");

            
            date.textContent = day.datetime;
            temperature_of_day.textContent = day.temp;
            description_of_day.textContent = day.description;

            li.appendChild(date);
            li.appendChild(temperature_of_day);
            li.appendChild(description_of_day);

            this.next_days.appendChild(li);
        });
    }
}

export default Content;