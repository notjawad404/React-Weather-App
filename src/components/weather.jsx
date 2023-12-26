import { useEffect, useState } from 'react';
import '../App.css';


import search_icon from '../assets/search.png';
import wind_icon from '../assets/wind.png';
import humidity_icon from '../assets/humidity.png';

const Weather = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [searchedLocation, setSearchedLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const ApiKey = `${import.meta.env.VITE_AccessKey}`;
  
  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting current location:', error.message);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const search = async () => {
    if (searchedLocation === '') {
      alert('Please enter a city.');
      return;
    }

    setLoading(true);
    await displayWeather(searchedLocation);
    setLoading(false);
  };

  const displayWeather = async (location) => {
    let url;
    if (location === 'current' && currentLocation) {
      url = `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&units=Metric&appid=${ApiKey}`;
    } else {
      url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=Metric&appid=${ApiKey}`;
    }

    try {
      let response = await fetch(url);

      if (!response.ok) {
        alert('City not found. Please enter a valid city');
        return;
      }

      let data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error('Error fetching weather data:', error.message);
    }
  };

  useEffect(() => {
    getCurrentLocation();
  }, []);

  useEffect(() => {
    if (currentLocation) {
      displayWeather('current');
    }
  }, [currentLocation]);

  return (
    <div className='h-screen overflow-y-scroll bg-img1'>
      <div className='w-3/4 m-auto mt-6'>
        <div className='flex justify-center pt-4 gap-4'>
          <input
            type='text'
            value={searchedLocation}
            onChange={(e) => setSearchedLocation(e.target.value)}
            className='cityInput flex w-96 h-8 border-none outline-none rounded-3xl px-5 text-gray-500 font-normal'
            placeholder='Search City'
          />
          <div
            className='flex justify-center items-center bg-white w-8 h-8 bg-black-50 rounded-3xl cursor-pointer'
            onClick={search}
          >
            <img src={search_icon} alt='search Icon' />
          </div>
        </div>

        {loading && <p className=' text-2xl text-white'>Loading...</p>}

        {weatherData && (
          <>
            <div className='mt-7 flex justify-center'>
              <img
                src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt='weather Image'
                className='weather-image w-20 h-20'
              />
            </div>

            <div className='weather-status mt-7 flex justify-center text-white text-2xl font-normal'>
              {weatherData.weather[0].main}
            </div>
            <div className='weather-description flex justify-center text-white text-lg font-normal'>
              {weatherData.weather[0].description}
            </div>

            <div className='weather-temp mt-7 flex justify-center text-white font-normal text-3xl'>
              {weatherData.main.temp}°C
            </div>
            <div className='weather-city flex justify-center text-white text-3xl font-normal'>
              {weatherData.name}
            </div>

            <div className='flex justify-center pt-4'>
              <div className='m-auto flex items-start gap-3 text-white'>
                <div className='text-3xl font-normal'>
                  <div className='min-temp'>{weatherData.main.temp_min}°C</div>
                  <div className='text-lg font-normal'>Min Temp</div>
                </div>
              </div>
              <div className='m-auto flex items-start gap-3 text-white'>
                <div className='text-3xl font-normal'>
                  <div className='max-temp'>{weatherData.main.temp_max}°C</div>
                  <div className='text-lg font-normal'>Max Temp</div>
                </div>
              </div>
            </div>
            <div className='mt-12 text-white flex justify-center'>
              <div className='m-auto flex items-start gap-3'>
                <img src={humidity_icon} alt='icon' className='icon mt-3' />
                <div className='text-3xl font-normal'>
                  <div className='humidity-percentage'>{weatherData.main.humidity}%</div>
                  <div className='text-lg font-normal'>Humidity</div>
                </div>
              </div>
              <div className='m-auto flex items-start gap-3'>
                <img src={wind_icon} alt='icon' className='icon mt-3 ' />
                <div className='text-3xl font-normal'>
                  <div className='wind-speed'>{weatherData.wind.speed} km/h</div>
                  <div className='text-lg font-normal'>Wind Speed</div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className='mt-4 text-white flex justify-center items-end'>
        Copyright © 2023. All rights reserved.
      </div>
    </div>
  );
};

export default Weather;
