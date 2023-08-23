const apikey = "3edca0ef9a6b774f81036a9d89fb922f";
let cities = ["Kolkata"];

let timeCalculation = (timestamp)=>
{
    let sunriseTimeMillis = timestamp * 1000;
    let sunriseDate = new Date(sunriseTimeMillis);
    let hours = sunriseDate.getHours();
    let minutes = sunriseDate.getMinutes();
    //let seconds = sunriseDate.getSeconds();
    let time = hours+":"+minutes;
    return time;
}

let checkWeather = async ()=>
{
    //const apikey = "3edca0ef9a6b774f81036a9d89fb922f";
    let city = document.getElementById("cityInput").value;
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

    let citychange = document.getElementById("citylocation");
    let citytemp = document.getElementById("tempValue");
    let citymintemp = document.getElementById("minTempValue");
    let citymaxtemp = document.getElementById("maxTempValue");
    let historywindow = document.getElementById("history");
    let cityhumidity = document.getElementById("humidityValue");
    let citywind = document.getElementById("speedValue");
    let citypressure = document.getElementById("pressureValue");
    let forecast = document.getElementById("forecast");
    let sunrisediv = document.getElementById("sunrise");
    let sunsetdiv = document.getElementById("sunset");

    let history = document.getElementById("searchhistory");
    let placeinfo = document.querySelector(".place-info");
    let historylength = cities.length;
    
   
    //history checking
    if(historywindow.style.display == "block")
    {
        historywindow.style.display = "none";
        placeinfo.style.display = "flex";
    }

    if(city=="")
    {
        city = "kolkata";
        const response = await fetch (apiUrl + `&appid=${apikey}` + `&q=${city}`);
        let data = await response.json();

        let sunrise = data.sys.sunrise;
        let sunset = data.sys.sunset;
        let risetime = timeCalculation(sunrise);
        let settime = timeCalculation(sunset);

        citychange.innerHTML = data.name;
        citytemp.innerHTML = data.main.temp;
        citymintemp.innerHTML = data.main.temp_min;
        citymaxtemp.innerHTML = data.main.temp_max;
        cityhumidity.innerHTML = data.main.humidity;
        citywind.innerHTML = data.wind.speed;
        citypressure.innerHTML = data.main.pressure;
        forecast.innerHTML = data.weather[0].description;
        sunrisediv.innerHTML = risetime;
        sunsetdiv.innerHTML = settime;
    }
    else
    {
        const response = await fetch (apiUrl + `&appid=${apikey}` + `&q=${city}`);
        let data = await response.json();
        //console.log(data.name);
        let sunrise = data.sys.sunrise;
        let sunset = data.sys.sunset;
        let risetime = timeCalculation(sunrise);
        let settime = timeCalculation(sunset);


        if(data.name == undefined)
        {
            citychange.innerHTML = "Error";
            citytemp.innerHTML = "Error";
            citymintemp.innerHTML = "Error";
            citymaxtemp.innerHTML = "Error";
            cityhumidity.innerHTML="Error";
            citywind.innerHTML = "Error";
            citypressure.innerHTML ="Error";
            forecast.innerHTML = "Error";
            sunrisediv.innerHTML = "Error";
            sunsetdiv.innerHTML = "Error";
        }
        else
        {
            citychange.innerHTML = data.name;
            citytemp.innerHTML = data.main.temp;
            citymintemp.innerHTML = data.main.temp_min;
            citymaxtemp.innerHTML = data.main.temp_max;
            cityhumidity.innerHTML = data.main.humidity;
            citywind.innerHTML = data.wind.speed;
            citypressure.innerHTML = data.main.pressure;
            forecast.innerHTML= data.weather[0].description;
            sunrisediv.innerHTML = risetime;
            sunsetdiv.innerHTML = settime;
            if(cities.includes(data.name)==false)
            {
                cities.push(data.name);
            }
        }
    }
    if(historylength >=20)
    {
        cities.pop(0);
    }
    else
    {
        let str = "";
        for(let i=historylength-1;i>=0;i--)
        {
            str =str+"<br>"+"<i class='fa fa-search'></i>"+" "+cities[i];
            history.innerHTML = "SEARCH HISTORY"+"<br>"+str;
        }
    }
}
//checkWeather();