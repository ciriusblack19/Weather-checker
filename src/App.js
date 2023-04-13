import './App.css';
import { useState } from 'react';
import Weather from './components/Weather/Weather';
import {getCityImage} from './utils/api';

const App = () => {
  const [bgImage, setBgImage] = useState(null);

  const handleGetCityImage = async (city) => {
    const image = await getCityImage(city);
    setBgImage(image);
  }

  return (
    <div className="App" style={{ backgroundImage: `url(${bgImage})` }}>
      <Weather onGetCityImage={handleGetCityImage} />
    </div>
  );
};

export default App;
