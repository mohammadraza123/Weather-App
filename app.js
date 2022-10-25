
function abc() {
    var input = document.getElementById("search_input")
    var data;
    var search = document.getElementById("search")
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=a63170d53047add4fe24c91c1d00c896&units=metric`
    )
        .then((res) => res.json())
        .then((res) => {
            data = res
            setTimeout(() => {
                if (data.cod === 200) {
                    var city = document.getElementById("update")
                    city.innerHTML = `<h1 id="rain1">   ${(data.name)}</h1> <br>  <h3 id="rain2">Weather Description : ${data.weather[0].description}</h3>
                <br> <h3 id="rainy">Temperature : ${data.main.temp}</h3>
                <br><h3 id="rain">Feels Like : ${data.main.feels_like}</h3>
                <br><h3 id="rain">Humidity: ${data.main.humidity}</h3>

`
                    input.value = ""
                    update.style.backgroundImage = "url('photos/clouds.gif')";
                    search.style.backgroundImage = "url('photos/clouds.gif')";

                    update.style.display = "block"
                    var container = document.getElementById("container")

                    if (data.weather[0].description === "haze") {
                        update.style.backgroundImage = "url('photos/haze image.gif')";
                        search.style.backgroundImage = "url('photos/haze image.gif')";

                    } else if
                        (data.weather[0].description === "smoke") {
                        update.style.backgroundImage = "url('photos/smoke image.gif')";
                        search.style.backgroundImage = "url('photos/smoke image.gif')";


                    }
                    else if
                        (data.weather[0].description === "light rain") {
                        update.style.backgroundImage = "url('photos/rain image.gif')";
                        search.style.backgroundImage = "url('photos/rain image.gif')";


                    }
                    else if (data.weather[0].description === "drizzle") {
                        container.style.backgroundImage = url("photos/drizzle Image.gif");

                    }


                } else {
                    var city = document.getElementById("update")
                    city.innerHTML = `<h1> ${("City Not Found")}</h1>`
                    input.value = ""
                }
            }, 700)
        }
        )
        .catch((err) => {
            console.log("Error", err);
        })



}