const crops = {

    "korea-rice": {

        name: "🌾 Rice",

        country: "South Korea",

        variety: "Japonica rice",

        climate: "Temperate / humid",

        planting: "May",

        growing: "June – August",

        harvest: "September – October",

        regions: "Jeolla, Chungcheong"

    },


    "japan-rice": {

        name: "🌾 Rice",

        country: "Japan",

        variety: "Japonica rice",

        climate: "Humid temperate",

        planting: "April – May",

        growing: "May – August",

        harvest: "September – October",

        regions: "Niigata, Akita, Hokkaido"

    },


    "india-wheat": {

        name: "🌾 Wheat",

        country: "India",

        variety: "Bread wheat",

        climate: "Cool and relatively dry",

        planting: "October – November",

        growing: "December – March",

        harvest: "April – May",

        regions: "Punjab, Haryana, Uttar Pradesh"

    },


    "brazil-coffee": {

        name: "☕ Coffee",

        country: "Brazil",

        variety: "Arabica / Robusta",

        climate: "Tropical / subtropical",

        planting: "Varies by region",

        growing: "Year-round",

        harvest: "May – September",

        regions: "Minas Gerais, São Paulo"

    },


    "usa-corn": {

        name: "🌽 Corn",

        country: "United States",

        variety: "Field corn",

        climate: "Temperate",

        planting: "April – May",

        growing: "May – August",

        harvest: "September – October",

        regions: "Iowa, Illinois, Nebraska"

    }

};



function showCrop() {

    const country =
        document.getElementById("country").value;

    const crop =
        document.getElementById("crop").value;


    const key = country + "-" + crop;

    const info = crops[key];


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
                    Data coming soon
                </h3>

                <p>
                    This country and crop combination
                    has not been added yet.
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

                <span>Variety</span>

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



function clearTimeline() {

    const months =
        document.querySelectorAll(".month");

    months.forEach(month => {

        month.classList.remove("active");

    });

}



function activateMonths(info) {

    const seasonText =
        info.planting + " " +
        info.growing + " " +
        info.harvest;


    const monthNames = [

        "jan",
        "feb",
        "mar",
        "apr",
        "may",
        "jun",
        "jul",
        "aug",
        "sep",
        "oct",
        "nov",
        "dec"

    ];


    monthNames.forEach(month => {

        if (
            seasonText
                .toLowerCase()
                .includes(
                    getFullMonth(month)
                )
        ) {

            document
                .getElementById(month)
                .classList
                .add("active");

        }

    });

}



function getFullMonth(shortMonth) {

    const months = {

        jan: "january",
        feb: "february",
        mar: "march",
        apr: "april",
        may: "may",
        jun: "june",
        jul: "july",
        aug: "august",
        sep: "september",
        oct: "october",
        nov: "november",
        dec: "december"

    };

    return months[shortMonth];

}
