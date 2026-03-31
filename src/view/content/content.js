import { convertUnits } from "../../utils/convert-unit";
import "./content.css";

class Content {
    constructor() {
        this.searched_city = document.querySelector("#searched-city");
        this.timezone = document.querySelector("#timezone");
        this.temperature = document.querySelector("#temperature");
        this.description = document.querySelector("#description");
        this.next_days = document.querySelector("#next-days");

        this.converter = convertUnits();
        this.setupUnitToggle();
    }

    setupUnitToggle() {
        // Event Delegation auf dem parent element, nicht auf #change-button
        this.temperature.addEventListener("click", (e) => {
            if (e.target.id === "change-button" || e.target.closest("#change-button")) {
                const dayTemps = document.querySelectorAll(".day-temp");

                if (this.temperature.textContent.includes("°F")) {
                    this.converter.FToC(this.temperature);
                    dayTemps.forEach(day => this.converter.FToCSimple(day));
                } else if (this.temperature.textContent.includes("°C")) {
                    this.converter.CToF(this.temperature);
                    dayTemps.forEach(day => this.converter.CToFSimple(day));
                }
            }
        });
    }

    render(obj) {
        const data = obj;
        const days = data.days;

        this.searched_city.textContent = data.address;
        this.timezone.textContent = data.timezone;
        this.temperature.innerHTML = `<button><i id="change-button" class="fa fa-refresh" aria-hidden="true"></i></button> Temperatur: ${data.currentConditions.temp} °F`;
        this.description.textContent = data.description;
        days.forEach(day => {
            const li = document.createElement("li");
            const date = document.createElement("p");
            const temperature_of_day = document.createElement("p");
            const description_of_day = document.createElement("p");

            date.classList.add("day-date");
            temperature_of_day.classList.add("day-temp");
            // description_of_day.classList.add("day-desc");
            
            date.textContent = day.datetime;
            temperature_of_day.textContent = day.temp + " °F";
            description_of_day.textContent = day.description;

            li.appendChild(date);
            li.appendChild(temperature_of_day);
            li.appendChild(description_of_day);

            this.next_days.appendChild(li);
        });
    }
}

export default Content;