import '../App.css';

import search_icon from '../assets/search.png';
// import clear_icon from '../assets/clear.png';
import cloud_icon from '../assets/cloud.png';
// import rain_icon from '../assets/rain.png';
// import snow_icon from '../assets/snow.png';
import wind_icon from '../assets/wind.png';
// import drizzle_icon from '../assets/drizzle.png';
import humidity_icon from '../assets/humidity.png';

export default function Weather() {
  // let ApiKey = '2cb6b07f4fc0a3d186c0fb2034a443f4';

  const search = () => { 
      const element = document.getElementsByClassName('cityInput');
      if(element[0].value === ''){
        alert('Please enter city name');
        return 0;
      }
  }
  return (
    <div className='bg-red-600 h-screen overflow-y-scroll'>
      <div className='container bg-blue-800 w-3/4 m-auto mt-6 overflow-y-auto h-5/6' >
        <div className='top-bar flex justify-center pt-16 gap-4'>
          <input type='text' className='cityInput flex w-96 h-8 border-none outline-none rounded-3xl pl-10 text-gray-500 font-normal' placeholder='Search for places' />
          <div className='search-icon flex justify-center items-center w-8 h-8 bg-slate-50 rounded-3xl cursor-pointer' onClick={()=>{search()}}>
            <img src={search_icon} alt='search Icon' />
          </div>

        </div>


        <div className='weather-image  mt-7 flex justify-center' >
          <img src={cloud_icon} alt='weather Image' />
        </div>
        <div className='weather-temp mt-7 flex justify-center text-white  font-normal text-3xl'>
          24°C
        </div>
        <div className='weather-city flex justify-center text-white text-3xl font-normal'>
          London
        </div>
        <div className='data-container mt-12 text-white flex justify-center'>
          <div className='element m-auto flex items-start gap-3'>
            <img src={humidity_icon} alt='icon' className='icon mt-3' />
            <div className='data text-3xl font-normal'>
              <div className='humidity-percentage'>
                80%
              </div>
              <div className='humidity-text text-lg font-normal'>
                Humidity
              </div>
            </div>
          </div>
          <div className='element m-auto flex items-start gap-3'>
            <img src={wind_icon} alt='icon' className='icon mt-3 ' />
            <div className='data text-3xl font-normal'>
              <div className='humidity-percentage'>
              20 km/h
              </div>
              <div className='humidity-text text-lg font-normal'>
                wind Speed
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    
  )
}
