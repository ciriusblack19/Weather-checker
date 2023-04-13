const API_KEY = 'c3486edb9d20def1ba489f6a737a069f'

const getWeatherData = async (city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const API_UNSPLASH = 'w6pE6NWbmsohh9w4pvA4hKevkGRJ77k3l-xwIZaEDY0'
async function getCityImage(city) {
  const response = await fetch(`https://api.unsplash.com/search/photos?query=${city}&client_id=${API_UNSPLASH}`);
  const data = await response.json();
  const image = data.results[0].urls.regular;
  return image;
}


export {getWeatherData, getCityImage};