import React from 'react'
import './Styles/Section_1.css';
import img1 from './Assets/img1.jpeg';

function Section_1() {
  return (
    <div>
    <div className='section1' id='section1'>
        <section className='left1'>
           <h1>Want anything to be easy with <span className='left11'>LaslesVPN</span></h1>
           <p>Provide a network for all your needs with ease and fun using LaslesVPN discover interesting features from us.</p>
           <button className='btn'>Get Started</button>
        </section>
        <section className='right1'>
           <img src={img1} alt=""/>

        </section>
    </div>
        <section className='bottom'>
         <div className="container text-center">
          <div className="row">
            <div className="col grid1">
            <div className='location'>        
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi    bi-person-fill location1" viewBox="0 0 16 16">
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
              </svg>    
            </div>
             <div className='location2'>
              <h3>90+</h3>
              <p>Users</p>
             </div>
             <hr></hr>
            </div>
          <div className="col grid1">
            <div className='location'>
             <svg xmlns="http://www.w3.org/2000/svg" width="16" fill="currentColor" className="bi bi-geo-alt-fill location1" viewBox="0 0 16 16">
                 <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
             </svg>
             </div>
             <div className='location2'>
              <h3>30+</h3>
              <p>Locations</p>
             </div>
             <hr></hr>
          </div>
          <div className="col grid1">
            <div className='location'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-hdd-stack location1" viewBox="0 0 16 16">
                <path d="M14 10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1zM2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2z"/>
                <path d="M5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0M14 3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z"/>
                <path d="M5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                </svg>
             </div>
             <div className='location2'>
              <h3>50+</h3>
              <p>Servers</p>
             </div>
          </div>
         </div>
       </div>
      </section>
   </div>
   
  )
}

export default Section_1