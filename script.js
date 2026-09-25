const crops = {

    /* =========================
       SOUTH KOREA
    ========================= */

    "korea-rice": {
        name: "🌾 Rice",
        commonName: "Rice",
        scientificName: "Oryza sativa",
        country: "South Korea",
        variety: "Japonica rice",
        climate: "Temperate / humid",
        planting: "May",
        growing: "June – August",
        harvest: "September – October",
        regions: "Jeolla, Chungcheong"
    },

    "korea-garlic": {
        name: "🧄 Garlic",
        commonName: "Garlic",
        scientificName: "Allium sativum",
        country: "South Korea",
        variety: "Korean garlic",
        climate: "Cool temperate",
        planting: "September – October",
        growing: "October – May",
        harvest: "May – June",
        regions: "Gyeongsang, Jeolla"
    },

    "korea-soybean": {
        name: "🫘 Soybean",
        commonName: "Soybean",
        scientificName: "Glycine max",
        country: "South Korea",
        variety: "Yellow soybean",
        climate: "Temperate",
        planting: "May – June",
        growing: "June – September",
        harvest: "September – October",
        regions: "Gyeongbuk, Jeonbuk"
    },

    "korea-black-soybean": {
        name: "🫘 Black Soybean",
        commonName: "Black soybean",
        scientificName: "Glycine max",
        country: "South Korea",
        variety: "Heuktae / Seoritae",
        climate: "Temperate",
        planting: "May – June",
        growing: "June – September",
        harvest: "September – October",
        regions: "Gyeongbuk, Jeonbuk"
    },


    /* =========================
       JAPAN
    ========================= */

    "japan-rice": {
        name: "🌾 Rice",
        commonName: "Rice",
        scientificName: "Oryza sativa",
        country: "Japan",
        variety: "Japonica rice",
        climate: "Humid temperate",
        planting: "April – May",
        growing: "May – August",
        harvest: "September – October",
        regions: "Niigata, Akita, Hokkaido"
    },

    "japan-tea": {
        name: "🍵 Tea",
        commonName: "Tea plant",
        scientificName: "Camellia sinensis",
        country: "Japan",
        variety: "Yabukita",
        climate: "Humid temperate / subtropical",
        planting: "Spring",
        growing: "Spring – Autumn",
        harvest: "April – October",
        regions: "Shizuoka, Kagoshima"
    },


    /* =========================
       INDIA
    ========================= */

    "india-wheat": {
        name: "🌾 Wheat",
        commonName: "Wheat",
        scientificName: "Triticum aestivum",
        country: "India",
        variety: "Bread wheat",
        climate: "Cool and relatively dry",
        planting: "October – November",
        growing: "December – March",
        harvest: "April – May",
        regions: "Punjab, Haryana, Uttar Pradesh"
    },

    "india-rice": {
        name: "🌾 Rice",
        commonName: "Rice",
        scientificName: "Oryza sativa",
        country: "India",
        variety: "Indica rice",
        climate: "Tropical / subtropical",
        planting: "June – July",
        growing: "July – September",
        harvest: "October – November",
        regions: "West Bengal, Uttar Pradesh, Punjab"
    },

    "india-cotton": {
        name: "🧵 Cotton",
        commonName: "Cotton",
        scientificName: "Gossypium spp.",
        country: "India",
        variety: "Indian cotton",
        climate: "Warm and semi-arid",
        planting: "April – June",
        growing: "June – October",
        harvest: "October – January",
        regions: "Gujarat, Maharashtra, Telangana"
    },


    /* =========================
       BRAZIL
    ========================= */

    "brazil-coffee": {
        name: "☕ Coffee",
        commonName: "Coffee",
        scientificName: "Coffea arabica / Coffea canephora",
        country: "Brazil",
        variety: "Arabica / Robusta",
        climate: "Tropical / subtropical",
        planting: "Varies by region",
        growing: "Year-round",
        harvest: "May – September",
        regions: "Minas Gerais, São Paulo"
    },

    "brazil-soybean": {
        name: "🫘 Soybean",
        commonName: "Soybean",
        scientificName: "Glycine max",
        country: "Brazil",
        variety: "Tropical soybean",
        climate: "Tropical / subtropical",
        planting: "September – December",
        growing: "October – February",
        harvest: "January – April",
        regions: "Mato Grosso, Paraná"
    },


    /* =========================
       UNITED STATES
    ========================= */

    "usa-corn": {
        name: "🌽 Corn",
        commonName: "Corn",
        scientificName: "Zea mays",
        country: "United States",
        variety: "Field corn",
        climate: "Temperate",
        planting: "April – May",
        growing: "May – August",
        harvest: "September – October",
        regions: "Iowa, Illinois, Nebraska"
    },

    "usa-soybean": {
        name: "🫘 Soybean",
        commonName: "Soybean",
        scientificName: "Glycine max",
        country: "United States",
        variety: "Field soybean",
        climate: "Temperate",
        planting: "April – May",
        growing: "May – September",
        harvest: "September – October",
        regions: "Iowa, Illinois, Minnesota"
    }

};


/* =================================
   COUNTRY → AVAILABLE CROPS
================================= */

const countryCrops = {

    korea: [
        "rice",
        "garlic",
        "soybean",
        "black-soybean"
    ],

    japan: [
        "rice",
        "tea"
    ],

    india: [
        "wheat",
        "rice",
        "cotton"
    ],

    brazil: [
        "coffee",
        "soybean"
    ],

    usa: [
        "corn",
        "soybean"
    ]

};


/* =================================
   CROP DISPLAY NAMES
================================= */

function getCropName(crop) {

    const names = {

        rice: "🌾 Rice",
        garlic: "🧄 Garlic",
        soybean: "🫘 Soybean",
        "black-soybean": "🫘 Black Soybean",
        tea: "🍵 Tea",
        wheat: "🌾 Wheat",
        cotton: "🧵 Cotton",
        coffee: "☕ Coffee",
        corn: "🌽 Corn"

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

    countryCrops[country].forEach(crop => {

        const option =
            document.createElement("option");

        option.value = crop;

        option.textContent =
            getCropName(crop);

        cropSelect.appendChild(option);

    });

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

    const stages = {
        planting: parseMonths(info.planting),
        growing: parseMonths(info.growing),
        harvest: parseMonths(info.harvest)
    };


    stages.planting.forEach(month => {

        document
            .getElementById(month)
            .classList
            .add("planting-active");

    });


    stages.growing.forEach(month => {

        document
            .getElementById(month)
            .classList
            .add("growing-active");

    });


    stages.harvest.forEach(month => {

        document
            .getElementById(month)
            .classList
            .add("harvest-active");

    });

}
function parseMonths(text) {

    const monthNumbers = {
        january: 1,
        february: 2,
        march: 3,
        april: 4,
        may: 5,
        june: 6,
        july: 7,
        august: 8,
        september: 9,
        october: 10,
        november: 11,
        december: 12
    };

    const monthIDs = {
        1: "jan",
        2: "feb",
        3: "mar",
        4: "apr",
        5: "may",
        6: "jun",
        7: "jul",
        8: "aug",
        9: "sep",
        10: "oct",
        11: "nov",
        12: "dec"
    };

    const lowerText = text.toLowerCase();

    /* Year-round crops */

    if (lowerText.includes("year-round")) {

        return Object.values(monthIDs);

    }


    /* Seasonal descriptions */

    if (lowerText.includes("spring")) {

        return ["mar", "apr", "may"];

    }


    if (lowerText.includes("summer")) {

        return ["jun", "jul", "aug"];

    }


    if (lowerText.includes("autumn") ||
        lowerText.includes("fall")) {

        return ["sep", "oct", "nov"];

    }


    if (lowerText.includes("winter")) {

        return ["dec", "jan", "feb"];

    }


    /* Find month names */

    const found = [];

    Object.keys(monthNumbers).forEach(month => {

        if (lowerText.includes(month)) {

            found.push(monthNumbers[month]);

        }

    });


    if (found.length === 0) {

        return [];

    }


    /* If there are two or more months,
       fill the entire range */

    if (found.length >= 2) {

        const start = Math.min(...found);
        const end = Math.max(...found);

        const result = [];

        for (let i = start; i <= end; i++) {

            result.push(monthIDs[i]);

        }

        return result;

    }


    /* Single month */

    return [monthIDs[found[0]]];

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
