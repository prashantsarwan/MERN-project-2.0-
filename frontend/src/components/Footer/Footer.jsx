import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets';
function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
        <img src={assets.logo}  />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius sapiente natus minus totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laboriosam quae at quisquam, fugit modi id, mollitia non obcaecati atque ipsum necessitatibus alias eum perferendis laborum enim possimus ipsa consectetur?</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
        </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91-986858455</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr/>
      <p className="footer-co">Copyright 2024 ⓒ Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer;
