import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className='footer'>
            <div className="col__holder">
                <h3>Get to Know Us</h3>
                <p>Careers</p>
                <p>Blogs</p>
                <p>About Amazon</p>
            </div>
            <div className="col__holder">
                <h3>Make Money with Us</h3>
                <p>Sell products on Amazon</p>
                <p>Sell on Amazon Business</p>
                <p>Become an Affiliate</p>
                <p>Advertise Your Products</p>
            </div>
            <div className="col__holder">
                <h3>Amazon Payment Products</h3>
                <p>Amazon Business Card</p>
                <p>Shop with Points</p>
                <p>Reload Your Balance</p>
            </div>
            <div className="col__holder">
                <h3>Let Us Help You</h3>
                <p>Amazon and COVID-19</p>
                <p>Your Account</p>
                <p>Your Orders</p>
                <p>Shipping Rates & Policies</p>
                <p>Help</p>
            </div>
        </div>
    )
}

export default Footer