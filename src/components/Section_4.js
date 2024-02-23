import React from 'react'
import './Styles/Section_4.css';
import map from './Assets/map.png';
import logo1 from './Assets/logo1.png';
import logo2 from './Assets/logo2.png';
import logo3 from './Assets/logo3.png';
import logo4 from './Assets/logo4.png';
import logo5 from './Assets/logo5.png';

function Section_4() {
  return (
    <div id='section4'>
        <div className='top4'>
            <h1>Huge Global Network<br></br> of Fast VPN</h1>
            <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p>
            <img src={map} alt=""/>
        </div>
        <div className='bottom4'>
            <img className='logo1 logo_1' src={logo1} alt=""/>  
            <img className='logo2 logo_1' src={logo2} alt=""/>
            <img className='logo3 logo_1' src={logo3} alt=""/>
            <img className='logo4 logo_1' src={logo4} alt=""/>
            <img className='logo5 logo_1' src={logo5} alt=""/>
        </div>

    </div>
  )
}

export default Section_4