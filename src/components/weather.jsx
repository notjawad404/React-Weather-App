import '../App.css';

import search_icon from '../assets/search.png';
import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
import rain_icon from '../assets/rain.png';
import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';

export default function Weather() {

  let ApiKey = '2cb6b07f4fc0a3d186c0fb2034a443f4';

  const search = async () => {
    const element = document.getElementsByClassName('cityInput');
    if (element[0].value === '') {
      alert('Please enter city name');
      return 0;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${ApiKey}`;


    let response = await fetch(url);

    if (!response.ok) {
      alert('City not found. Please enter a valid city name.');
      return;
    }

    let data = await response.json();

    const humidity = document.getElementsByClassName('humidity-percentage');
    const wind = document.getElementsByClassName('wind-speed');
    const temp = document.getElementsByClassName('weather-temp');
    const city = document.getElementsByClassName('weather-city');
    const icon = document.getElementsByClassName('weather-image');
    const status = document.getElementsByClassName('weather-status');
    const description = document.getElementsByClassName('weather-description');

    const min_temp = document.getElementsByClassName('min-temp');
    const max_temp = document.getElementsByClassName('max-temp');

    humidity[0].innerHTML = data.main.humidity + '%';
    wind[0].innerHTML = data.wind.speed + ' km/h';
    temp[0].innerHTML = data.main.temp + '°C';
    city[0].innerHTML = data.name;
    status[0].innerHTML = data.weather[0].main;
    min_temp[0].innerHTML = data.main.temp_min + '°C';
    max_temp[0].innerHTML = data.main.temp_max + '°C';
    description[0].innerHTML = data.weather[0].description;
 

    if (data.weather[0].main === 'Clouds') {
      icon[0].src = cloud_icon;
    }
    else if (data.weather[0].main === 'Clear') {
      icon[0].src = clear_icon;
    }
    else if (data.weather[0].main === 'Rain') {
      icon[0].src = rain_icon;
    }
    else if (data.weather[0].main === 'Snow') {
      icon[0].src = snow_icon;
    }
    else if (data.weather[0].main === 'Drizzle') {
      icon[0].src = drizzle_icon;
    }
    else {
      icon[0].src = cloud_icon;
    }
  }
  return (
    <div className='h-screen overflow-y-scroll bg-img1'>
      <div className='  w-3/4 m-auto mt-6 overflow-y-auto h-95' >
        <div className='flex justify-center pt-4 gap-4'>
          <input type='text' className='cityInput flex w-96 h-8 border-none outline-none rounded-3xl pl-10 text-gray-500 font-normal' placeholder='Search for places' />
          <div className='flex justify-center items-center bg-white w-8 h-8 bg-black-50 rounded-3xl cursor-pointer' onClick={() => { search() }}>
            <img src={search_icon} alt='search Icon' />
          </div>

        </div>

        <div className='mt-7 flex justify-center'>
          <img src={cloud_icon} alt='weather Image' className='weather-image  w-20 h-20' />
        </div>

        <div className='weather-status mt-7 flex justify-center text-white text-2xl font-normal'>
          status
        </div>
        <div className='weather-description flex justify-center text-white text-lg font-normal'>
         Description
        </div>

        <div className='weather-temp mt-7 flex justify-center text-white  font-normal text-3xl'>
          -°C
        </div>
        <div className='weather-city flex justify-center text-white text-3xl font-normal'>
          City
        </div>

        <div className='flex justify-center pt-4'>
          <div className='m-auto flex items-start gap-3 text-white'>
            <div className='text-3xl font-normal'>
              <div className='min-temp'>
                -°C
              </div>
              <div className='text-lg font-normal'>
                Min Temp
              </div>
            </div>
          </div>
          <div className='m-auto flex items-start gap-3 text-white'>
            <div className='text-3xl font-normal'>
              <div className='max-temp'>
                -°C
              </div>
              <div className='text-lg font-normal'>
                Max Temp
              </div>
            </div>
          </div>
        </div>
        <div className='mt-12 text-white flex justify-center'>
          <div className='m-auto flex items-start gap-3'>
            <img src={humidity_icon} alt='icon' className='icon mt-3' />
            <div className='text-3xl font-normal'>
              <div className='humidity-percentage'>
                -%
              </div>
              <div className='text-lg font-normal'>
                Humidity
              </div>
            </div>
          </div>
          <div className='m-auto flex items-start gap-3'>
            <img src={wind_icon} alt='icon' className='icon mt-3 ' />
            <div className='text-3xl font-normal'>
              <div className='wind-speed'>
                -Km/h
              </div>
              <div className='text-lg font-normal'>
                wind Speed
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='mt-12 text-white flex justify-center bottom-8'>
        Copyright © 2023 . All rights reserved.
      </div>
    </div>

  )
}