const crops = {

    /* SOUTH KOREA */

    "korea-rice": {
        name: "Rice",
        commonName: "Rice",
        scientificName: "Oryza sativa",
        country: "South Korea",
        variety: "Japonica rice",
        climate: "Temperate / humid",
        planting: "May",
        growing: "June – August",
        harvest: "September – October",
        plantingMonths: ["may"],
        growingMonths: ["jun", "jul", "aug"],
        harvestMonths: ["sep", "oct"],
        regions: "Jeolla, Chungcheong"
    },

    "korea-garlic": {
        name: "Garlic",
        commonName: "Garlic",
        scientificName: "Allium sativum",
        country: "South Korea",
        variety: "Korean garlic",
        climate: "Cool temperate",
        planting: "September – October",
        growing: "October – May",
        harvest: "May – June",
        plantingMonths: ["sep", "oct"],
        growingMonths: ["nov", "dec", "jan", "feb", "mar", "apr"],
        harvestMonths: ["may", "jun"],
        regions: "Gyeongsang, Jeolla"
    },

    "korea-soybean": {
        name: "Soybean",
        commonName: "Soybean",
        scientificName: "Glycine max",
        country: "South Korea",
        variety: "Yellow soybean",
        climate: "Temperate",
        planting: "May – June",
        growing: "June – September",
        harvest: "September – October",
        plantingMonths: ["may", "jun"],
        growingMonths: ["jul", "aug"],
        harvestMonths: ["sep", "oct"],
        regions: "Gyeongbuk, Jeonbuk"
    },

    "korea-black-soybean": {
        name: "Black Soybean",
        commonName: "Black soybean",
        scientificName: "Glycine max",
        country: "South Korea",
        variety: "Heuktae / Seoritae",
        climate: "Temperate",
        planting: "May – June",
        growing: "June – September",
        harvest: "September – October",
        plantingMonths: ["may", "jun"],
        growingMonths: ["jul", "aug"],
        harvestMonths: ["sep", "oct"],
        regions: "Gyeongbuk, Jeonbuk"
    },

    /* JAPAN */

    "japan-rice": {
        name: "Rice",
        commonName: "Rice",
        scientificName: "Oryza sativa",
        country: "Japan",
        variety: "Japonica rice",
        climate: "Humid temperate",
        planting: "April – May",
        growing: "May – August",
        harvest: "September – October",
        plantingMonths: ["apr", "may"],
        growingMonths: ["jun", "jul", "aug"],
        harvestMonths: ["sep", "oct"],
        regions: "Niigata, Akita, Hokkaido"
    },

    "japan-tea": {
        name: "Tea",
        commonName: "Tea plant",
        scientificName: "Camellia sinensis",
        country: "Japan",
        variety: "Yabukita",
        climate: "Humid temperate / subtropical",
        planting: "Spring",
        growing: "Spring – Autumn",
        harvest: "April – October",
        plantingMonths: ["mar", "apr", "may"],
        growingMonths: ["jun", "jul", "aug", "sep"],
        harvestMonths: ["apr", "may", "jun", "jul", "aug", "sep", "oct"],
        regions: "Shizuoka, Kagoshima"
    },

    /* INDIA */

    "india-wheat": {
        name: "Wheat",
        commonName: "Wheat",
        scientificName: "Triticum aestivum",
        country: "India",
        variety: "Bread wheat",
        climate: "Cool and relatively dry",
        planting: "October – November",
        growing: "December – March",
        harvest: "April – May",
        plantingMonths: ["oct", "nov"],
        growingMonths: ["dec", "jan", "feb", "mar"],
        harvestMonths: ["apr", "may"],
        regions: "Punjab, Haryana, Uttar Pradesh"
    },

    "india-rice": {
        name: "Rice",
        commonName: "Rice",
        scientificName: "Oryza sativa",
        country: "India",
        variety: "Indica rice",
        climate: "Tropical / subtropical",
        planting: "June – July",
        growing: "July – September",
        harvest: "October – November",
        plantingMonths: ["jun", "jul"],
        growingMonths: ["aug", "sep"],
        harvestMonths: ["oct", "nov"],
        regions: "West Bengal, Uttar Pradesh, Punjab"
    },

    "india-cotton": {
        name: "Cotton",
        commonName: "Cotton",
        scientificName: "Gossypium spp.",
        country: "India",
        variety: "Indian cotton",
        climate: "Warm and semi-arid",
        planting: "April – June",
        growing: "June – October",
        harvest: "October – January",
        plantingMonths: ["apr", "may", "jun"],
        growingMonths: ["jul", "aug", "sep"],
        harvestMonths: ["oct", "nov", "dec", "jan"],
        regions: "Gujarat, Maharashtra, Telangana"
    },

    /* BRAZIL */

    "brazil-coffee": {
        name: "Coffee",
        commonName: "Coffee",
        scientificName: "Coffea arabica / Coffea canephora",
        country: "Brazil",
        variety: "Arabica / Robusta",
        climate: "Tropical / subtropical",
        planting: "Varies by region",
        growing: "Year-round",
        harvest: "May – September",
        plantingMonths: [],
        growingMonths: [
            "jan", "feb", "mar", "apr",
            "may", "jun", "jul", "aug",
            "sep", "oct", "nov", "dec"
        ],
        harvestMonths: ["may", "jun", "jul", "aug", "sep"],
        regions: "Minas Gerais, São Paulo"
    },

    "brazil-soybean": {
        name: "Soybean",
        commonName: "Soybean",
        scientificName: "Glycine max",
        country: "Brazil",
        variety: "Tropical soybean",
        climate: "Tropical / subtropical",
        planting: "September – December",
        growing: "October – February",
        harvest: "January – April",
        plantingMonths: ["sep", "oct", "nov", "dec"],
        growingMonths: ["oct", "nov", "dec"],
        harvestMonths: ["jan", "feb", "mar", "apr"],
        regions: "Mato Grosso, Paraná"
    },

    /* UNITED STATES */

    "usa-corn": {
        name: "Corn",
        commonName: "Corn",
        scientificName: "Zea mays",
        country: "United States",
        variety: "Field corn",
        climate: "Temperate",
        planting: "April – May",
        growing: "May – August",
        harvest: "September – October",
        plantingMonths: ["apr", "may"],
        growingMonths: ["jun", "jul", "aug"],
        harvestMonths: ["sep", "oct"],
        regions: "Iowa, Illinois, Nebraska"
    },

    "usa-soybean": {
        name: "Soybean",
        commonName: "Soybean",
        scientificName: "Glycine max",
        country: "United States",
        variety: "Field soybean",
        climate: "Temperate",
        planting: "April – May",
        growing: "May – September",
        harvest: "September – October",
        plantingMonths: ["apr", "may"],
        growingMonths: ["jun", "jul", "aug"],
        harvestMonths: ["sep", "oct"],
        regions: "Iowa, Illinois, Minnesota"
    }

};


/* =================================
   COUNTRY → AVAILABLE CROPS
================================= */

const cropDatabase = {

    rice: {
        name: "Rice",
        category: "Grains",
        countries: ["korea", "japan", "india"]
    },

    garlic: {
        name: "Garlic",
        category: "Vegetables",
        countries: ["korea"]
    },

    soybean: {
        name: "Soybean",
        category: "Legumes",
        countries: ["korea", "brazil", "usa"]
    },

    "black-soybean": {
        name: "Black Soybean",
        category: "Legumes",
        countries: ["korea"]
    },

    tea: {
        name: "Tea",
        category: "Beverage Crops",
        countries: ["japan"]
    },

    wheat: {
        name: "Wheat",
        category: "Grains",
        countries: ["india"]
    },

    cotton: {
        name: "Cotton",
        category: "Fiber Crops",
        countries: ["india"]
    },

    coffee: {
        name: "Coffee",
        category: "Beverage Crops",
        countries: ["brazil"]
    },

    corn: {
        name: "Corn",
        category: "Grains",
        countries: ["usa"]
    }

};


/* =================================
   CROP DISPLAY NAMES
================================= */

function getCropName(crop) {

    const names = {

        rice: "Rice",
        garlic: "Garlic",
        soybean: "Soybean",
        "black-soybean": "Black Soybean",
        tea: "Tea",
        wheat: "Wheat",
        cotton: "Cotton",
        coffee: "Coffee",
        corn: "Corn"

    };

    return names[crop] || crop;

}


/* =================================
   UPDATE CROP DROPDOWN
================================= */

function updateCropOptions() {

    const country =
        document.getElementById("country").value;

    const cropSelect =
        document.getElementById("crop");

    cropSelect.innerHTML = `
        <option value="">
            Select a crop
        </option>
    `;

    if (!country) {
        return;
    }

    Object.entries(cropDatabase).forEach(
        ([crop, data]) => {

            if (data.countries.includes(country)) {

                const option =
                    document.createElement("option");

                option.value = crop;

                option.textContent =
                    data.name;

                cropSelect.appendChild(option);
            }
        }
    );
}


/* =================================
   SHOW CROP INFORMATION
================================= */

function showCrop() {

    const country =
        document.getElementById("country").value;

    const crop =
        document.getElementById("crop").value;

    const key =
        country + "-" + crop;

    const info =
        crops[key];

    const display =
        document.getElementById("crop-info");

    clearTimeline();


    if (!info) {

        display.innerHTML = `

            <div class="empty-state">

                <div class="empty-icon">
                    🌱
                </div>

                <h3>
                    Select a crop to begin
                </h3>

                <p>
                    Choose a country and crop
                    to explore agricultural information.
                </p>

            </div>

        `;

        return;
    }


    display.innerHTML = `

        <div class="crop-header">

            <p class="eyebrow">
                ${info.country.toUpperCase()}
            </p>

            <h3>
                ${info.name}
            </h3>

            <p>
                Agricultural profile
            </p>

        </div>


        <div class="crop-details">

            <div class="info-box">

                <span>Scientific Name</span>

                <strong>
                    <i>${info.scientificName}</i>
                </strong>

            </div>


            <div class="info-box">

                <span>Variety / Type</span>

                <strong>
                    ${info.variety}
                </strong>

            </div>


            <div class="info-box">

                <span>Climate</span>

                <strong>
                    ${info.climate}
                </strong>

            </div>


            <div class="info-box">

                <span>Main Regions</span>

                <strong>
                    ${info.regions}
                </strong>

            </div>


            <div class="info-box">

                <span>Planting</span>

                <strong>
                    ${info.planting}
                </strong>

            </div>


            <div class="info-box">

                <span>Growing</span>

                <strong>
                    ${info.growing}
                </strong>

            </div>


            <div class="info-box">

                <span>Harvest</span>

                <strong>
                    ${info.harvest}
                </strong>

            </div>

        </div>

    `;


    activateMonths(info);

}


/* =================================
   CLEAR TIMELINE
================================= */

function clearTimeline() {

    const months =
        document.querySelectorAll(".month");

    months.forEach(month => {

        month.classList.remove(
            "active",
            "planting-active",
            "growing-active",
            "harvest-active"
        );

    });

}


/* =================================
   ACTIVATE SEASON MONTHS
================================= */

function activateMonths(info) {

    clearTimeline();

    /* Growing season */
    info.growingMonths.forEach(month => {
        document
            .getElementById(month)
            .classList
            .add("growing-active");
    });

    /* Planting season */
    info.plantingMonths.forEach(month => {
        document
            .getElementById(month)
            .classList
            .remove("growing-active");

        document
            .getElementById(month)
            .classList
            .add("planting-active");
    });

    /* Harvest season */
    info.harvestMonths.forEach(month => {
        document
            .getElementById(month)
            .classList
            .remove(
                "planting-active",
                "growing-active"
            );

        document
            .getElementById(month)
            .classList
            .add("harvest-active");
    });
}

/* =================================
   COUNTRY CHANGE EVENT
================================= */

document
    .getElementById("country")
    .addEventListener(
        "change",
        updateCropOptions
    );
/* Interactive World Map */

const mapSvg = d3.select("#world-map-svg");

const mapWidth = 1000;
const mapHeight = 550;

const projection = d3
    .geoNaturalEarth1()
    .fitSize(
        [mapWidth, mapHeight],
        { type: "Sphere" }
    );

const path = d3.geoPath()
    .projection(projection);

const tooltip =
    document.getElementById("map-tooltip");

const countryName =
    document.getElementById("map-country-name");


fetch(
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"
)
    .then(response => response.json())

    .then(world => {

        const countries =
            topojson.feature(
                world,
                world.objects.countries
            );

        mapSvg
            .selectAll(".country")
            .data(countries.features)
            .join("path")
            .attr("class", "country")
            .attr("d", path)

            .on("mouseenter", function(event, d) {

                d3.select(this)
                    .classed(
                        "country-hover",
                        true
                    );

                countryName.textContent =
                    getMapCountryName(d.id);

                tooltip.style.display = "flex";
            })

            .on("mousemove", function(event) {

                const rect =
                    mapSvg
                        .node()
                        .getBoundingClientRect();

                tooltip.style.left =
                    (event.clientX - rect.left + 15) + "px";

                tooltip.style.top =
                    (event.clientY - rect.top + 15) + "px";
            })

            .on("mouseleave", function() {

                d3.select(this)
                    .classed(
                        "country-hover",
                        false
                    );

                tooltip.style.display = "none";
            })

           .on("click", function(event, d) {

    const country =
        getMapCountryKey(d.id);

    if (!country) {
        return;
    }

    const countrySelect =
        document.getElementById("country");

    countrySelect.value = country;

    updateCropOptions();

    document.getElementById("crop").value = "";

    updateWeather(country);
});
    })

    .catch(error => {

        console.error(
            "AgriAtlas map failed to load:",
            error
        );

    });


function getMapCountryName(id) {

    const names = {
        410: "South Korea",
        392: "Japan",
        356: "India",
        076: "Brazil",
        840: "United States"
    };

    return names[id] || "Country";
}


function getMapCountryKey(id) {

    const countries = {
        410: "korea",
        392: "japan",
        356: "india",
        076: "brazil",
        840: "usa"
    };

    return countries[id] || null;
}
/* Live Weather */

const weatherLocations = {
    korea: {
        name: "Jeolla, South Korea",
        latitude: 35.16,
        longitude: 126.85
    },

    japan: {
        name: "Niigata, Japan",
        latitude: 37.90,
        longitude: 139.02
    },

    india: {
        name: "Punjab, India",
        latitude: 30.90,
        longitude: 75.86
    },

    brazil: {
        name: "Minas Gerais, Brazil",
        latitude: -19.92,
        longitude: -43.94
    },

    usa: {
        name: "Iowa, United States",
        latitude: 41.60,
        longitude: -93.61
    }
};


async function updateWeather(country) {
console.log("Weather function called:", country);
    const location = weatherLocations[country];

    if (!location) {
        return;
    }

    const locationElement =
        document.getElementById("weather-location");

    const temperatureElement =
        document.getElementById("weather-temperature");

    const humidityElement =
        document.getElementById("weather-humidity");

    const statusElement =
        document.getElementById("weather-status");

    locationElement.textContent =
        location.name;

    temperatureElement.textContent =
        "Loading...";

    humidityElement.textContent =
        "Loading...";

    statusElement.textContent =
        "Fetching current weather...";

    const url =
        `https://api.open-meteo.com/v1/forecast` +
        `?latitude=${location.latitude}` +
        `&longitude=${location.longitude}` +
        `&current=temperature_2m,relative_humidity_2m` +
        `&temperature_unit=celsius`;

    try {

        const response =
            await fetch(url);

        const data =
            await response.json();

        temperatureElement.textContent =
            `${data.current.temperature_2m} °C`;

        humidityElement.textContent =
            `${data.current.relative_humidity_2m}%`;

        statusElement.textContent =
            "Current conditions";

    } catch (error) {

        console.error(
            "Weather failed to load:",
            error
        );

        temperatureElement.textContent =
            "Unavailable";

        humidityElement.textContent =
            "Unavailable";

        statusElement.textContent =
            "Weather data could not be loaded.";
    }
}
