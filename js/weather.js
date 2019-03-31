let key = "16972f9ba13c637fb37807580fcaac19";
let zip = "Beith, UK";
let weather = {};

let summary = $("#summary");

let constructURL = function (zipcode) {
    return "http://api.openweathermap.org/data/2.5/weather?q=" + zipcode + "&APPID="
        + key + "&units=metric";
};

function testJqueryGetJSON(url) {
    $.getJSON(url).done(function (result) {
        if (result.length == 0) {
            alert("nothing");
        }
        if (result.length) {
            alert("success");
        }
    }).fail(function (d, textStatus, error) {
        console.error("getJSON failed, status: " + textStatus + ", error: " + error)
    });
};

function capitalize(str) {
    let first = str.charAt(0);
    first = first.toUpperCase();
    return first + str.slice(1);
};

function pullWeather(zipcode) {
    let url = constructURL(zipcode);

    $.getJSON(url, {}).done(function (data) {
        weather.summary = data.weather[0].description;
        weather.summary = capitalize(weather.summary);

        weather.temperature = data.main.temp;

        summary.text( weather.summary + ' | ' + Math.round(weather.temperature) + "°C");
    });
};

document.addEventListener("DOMContentLoaded", e => {
    pullWeather(zip)

    summary.click(function () {
        summary.text('Refreshing...');
        pullWeather(zip);
    });
});
