
let url = "https://api.openweathermap.org/data/2.5/weather?&appid=2d88617f3abf228cd602c2d31d990576&units=metric&q=";

// Default city
let defaultCity = "Delhi";

// Call this function when the page loads
window.addEventListener("DOMContentLoaded", async () => {
  let result = await getWeather(defaultCity);

  if (result && result.main) {
    let weatherDescription = result.weather[0].description;
    let icon = weatherCloud(weatherDescription);
    let temp = result.main.temp;
    let feelsLike = result.main.feels_like;

    // Show default city card
    recentLocationWeather(defaultCity, icon, temp, weatherDescription, feelsLike);
  }
});

let searchBtn = document.querySelector("#searchBtn");

searchBtn.addEventListener("click",async()=>{
  let cityElement = document.querySelector("#searchInput");
  let city = cityElement.value;
  let cityNameDiv = document.querySelector("#cityNameDiv")
  let tempDiv = document.querySelector("#tempDiv")
  let tempDivDescription = document.querySelector("#weather-description");
  let fellLikeTempDiv = document.querySelector("#feel-like-Div");
  
  let result = await getWeather(city);
  console.log(result);
  let weatherDescription = result.weather[0].description;
  let icon = weatherCloud(weatherDescription);
  console.log(icon);
  
  let temp = result.main.temp;
  let feelsLike = result.main.feels_like;
  recentLocationWeather(city, icon ,temp, weatherDescription , feelsLike);
  cityElement.value ="";
  
})


async function getWeather(location) {

  try {
    let res = await axios.get(url+location);
    console.log(res);
    return res.data;
  } catch (err) {
    return "404 Not Found" ;
  }
}


function weatherCloud (weatherDescription){
  switch(weatherDescription){
    case "clearsky":
      return '<i class="fa-solid fa-cloud-sun"></i>';

    case "few clouds":
    case "scattered clouds":
      return '<i class="fa-solid fa-cloud-sun"></i>';
    
    case "overcast clouds":
    case "brokencloude":
      return '<i class="fa-solid fa-cloud"></i>';    
    
    case "mist":
    case "haze":
    case "fog":
    case "smoke":
      return '<i class="fa-solid fa-cloud"></i>';

    case "light rain":
    case "moderate rain":
      return '<i class="fa-solid fa-cloud-rain"></i>'; 
      
    case "heavy intensity rain":
    case "very heavy rain":
    case "extreme rain":
      return '<i class="fa-solid fa-cloud-showers-heavy"></i>';
      
    case "shower rain":
      return '<i class="fa-solid fa-cloud-showers-water"></i>';  
    
    case "thunderstorm":
    case "thunderstorm with light rain":
    case "thunderstorm with heavy rain":
      return '<i class="fa-solid fa-cloud-bolt"></i>'; 
      
    default:
      return '<i class="fa-solid fa-cloud-meatball"></i>';



  }

}

let url1 = "https://newsapi.org/v2/everything?q=India weather&from=2025-08-13&sortBy=publishedAt&apiKey=456b95c3f06042f4a5afaa87d1ed965a"

async function getWeatherNews(){
  let result1 = await axios.get(url1);
  console.log(result1);
}



function recentLocationWeather(city, icon ,temp, weatherDescription , feelsLike) {
    let container = document.querySelector("#container");
    

    // ✅ If more than 3 cards, remove the first (oldest) one
    if (container.children.length >= 3) {
        container.removeChild(container.firstElementChild);
    }

    // Create main card
    let cityCard = document.createElement("div");
    cityCard.classList.add("Card");

    // City name
    let cityName = document.createElement("h2");
    cityName.textContent = city;
    cityName.classList.add("cityNameDiv");
    cityCard.appendChild(cityName);

    // Temp div
    let tempDiv = document.createElement("div");
    tempDiv.innerHTML= `${icon} ${temp}°C`;
    tempDiv.classList.add("tempDiv");
    cityCard.appendChild(tempDiv);

    // Weather description
    let weatherDescriptionDiv = document.createElement("div");
    weatherDescriptionDiv.textContent = ` ${weatherDescription }`;
    weatherDescriptionDiv.classList.add("weather-description");
    cityCard.appendChild(weatherDescriptionDiv);
    // Feels like 
    let feelLikeDiv = document.createElement("div");
    feelLikeDiv.textContent= `Feel like° ${feelsLike}°`;
    feelLikeDiv.classList.add("feel-like-Div");
    cityCard.appendChild(feelLikeDiv);

    // Add card to container
    container.appendChild(cityCard);
}

function apiNews (){
  let url = "https://gnews.io/api/v4/search?q=world%20india&lang=en&max=10&apikey=2e5e3b1403675fd5a790e8a1bbd2f3a7";

  async function getWeatherNews() {
    let result = await axios.get(url);
    console.log(result);
    
  }

}

