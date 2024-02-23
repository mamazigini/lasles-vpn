import React from 'react'
import './Styles/Section_3.css'
import img3 from './Assets/img3.png'


function Section_3() {
  return (
    <div id='section3'>
        <div className='top3'>
             <h1>Choose Your Plan</h1>
             <p>Let's choose the package that is best for you and explore it happily and cheerfully.</p>
        </div>
        <div className='box'>
        <div className='box1'>
            <img src={img3} alt=""/>
            <h3>Free Plan</h3>
            <ul>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check box12" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    <p>Unlimited Bandwidth</p>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check box12" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    <p>Encrypted Connection</p>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check box12" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    <p>No Traffic Logs</p>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check box12" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    <p>Works on All Devices</p>
                </li>
            </ul>
            <h4>Free</h4>
            <button className='btn1'>Select</button>
        </div>
        <div className='box1'>
            <img src={img3} alt=""/>
            <h3>Standard Plan</h3>
            <ul>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check box12" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    <p>Unlimited Bandwidth</p>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check box12" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    <p>Encrypted Connection</p>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check box12" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    <p>Yes Traffic Logs</p>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check box12" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    <p>Works on All Devices</p>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check box12" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    <p>Connect Anywhere</p>
                </li>
            </ul>
            <h3>$9<span className='month'>/month</span></h3>
            <button className='btn1'>Select</button>
        </div>
        <div className='box1'>
            <img src={img3} alt=""/>
            <h3>Premium Plan</h3>
            <ul>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check box12" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    <p>Unlimited Bandwidth</p>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check box12" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    <p>Encrypted Connection</p>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check box12" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    <p>Yes Traffic Logs</p>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check box12" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    <p>Works on All Devices</p>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check box12" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    <p>Connect Anywhere</p>
                </li>
                <li>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-check box12" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425z"/>
                    </svg>
                    <p>Get New Features</p>
                </li>
            </ul>
            <h3>$12<span className='month'>/month</span></h3>
            <button className='btn1'>Select</button>
        </div>
    </div>
    </div>
  )
}

export default Section_3