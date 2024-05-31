document.getElementById('search-btn').addEventListener('click', function(){
    const city = document.getElementById('city-input').value;
    if (city) {
        getWeather(city);
    }
});

