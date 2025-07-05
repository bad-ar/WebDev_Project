const apiKey = e0bb94679f89eae400bacb869186ec02;
const apiurl = "https://api.openweathermap.org/data/2.5/weather?\
units=metric & q=berlin";

async function checkweather() {
    const response = await fetch(apiurl + '&appid=${apiKey');
    
}
