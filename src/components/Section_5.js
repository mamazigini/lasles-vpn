import React from 'react'
import './Styles/Section_5.css';
import prof1 from './Assets/prof1.jpg';
import prof2 from './Assets/prof2.jpg';
import prof3 from './Assets/prof3.jpg';
import star from './Assets/star.png';

function Section_5() {
  return (
    <div>
        <section className='section5'>
            <div className='top5'>
                <h1>Trusted by Thousands of Happy<br></br> Customer</h1>
                <p>These are the stories of our customers who have joined us with great pleasure when using this crazy feature.</p>
            </div>
            <div className='bottom5'>
                <div className='comment'>
                    <div className='comment1'>
                        <img className='prof1' src={prof1} alt=""/>  
                        <div className='comment2'>
                            <h5>Viezh Robert</h5>
                            <p>Warsaw, Poland</p>
                        </div>
                        <p className='rate'>4.5</p>
                        <img src={star} alt=""/>  
                    </div>
                    <p className='para'>“Wow... I am very happy to use this VPN, it turned out to be more than my expectations and so far there have been no problems. LaslesVPN always the best”.</p>            
                </div>
                <div className='comment'>
                    <div className='comment1'>
                        <img className='prof1' src={prof2} alt=""/>  
                        <div className='comment2'>
                            <h5>Yessica Christy</h5>
                            <p>Shanxi, China</p>
                        </div>
                        <p className='rate'>4.5</p>
                        <img src={star} alt=""/>  
                    </div>
                    <p className='para'>“I like it because I like to travel far and still can connect with high speed.”</p>            
                </div>
                <div className='comment'>
                    <div className='comment1'>
                        <img className='prof1' src={prof3} alt=""/>  
                        <div className='comment2'>
                            <h5>Kim Young Jou</h5>
                            <p>Seoul, South Korea</p>
                        </div>
                        <p className='rate'>4.5</p>
                        <img src={star} alt=""/>  
                    </div>
                    <p className='para'>“This is very unusual for my business that currently requires a virtual private network that has high security.”</p>            
                </div>
            </div>
            <div className='flow'>
                <div className='circle'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-circle-fill flowcircle" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-circle-fill flowcircle flowwhite" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-circle-fill flowcircle flowwhite" viewBox="0 0 16 16">
                    <circle cx="8" cy="8" r="8"/>
                    </svg>
                </div>
                <div className='arrow'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-left-circle flowarrow" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-right-circle flowarrow" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
                    </svg>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Section_5