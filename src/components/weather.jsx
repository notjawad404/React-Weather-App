import '../App.css';

import search_icon from '../assets/search.png';
// import clear_icon from '../assets/clear.png';
// import cloud_icon from '../assets/cloud.png';
// import rain_icon from '../assets/rain.png';
// import snow_icon from '../assets/snow.png';
// import wind_icon from '../assets/wind.png';
// import drizzle_icon from '../assets/drizzle.png';
// import humidity_icon from '../assets/humidity.png';

export default function Weather() {
  return (
    <div className='container bg-orange-500' >
      <div className='top-bar'>
        <input type='text' className='cityInput' placeholder='Search for places' />
        <div className='search-icon'>
            <img src={search_icon}  alt='search Icon'/>
        </div>
      </div>
    </div>
  )
}
