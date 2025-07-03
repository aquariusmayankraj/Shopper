import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
            An e-commerce website is an online platform that facilitates a buying
            and selling of products or services over the internet showcase their 
            products, interact with where businesses and individuals transactions without the need for 
            a physical presence. E-commerce websites have gained immense popularity due to 
            their convenice accessibility, and the global reach they offer.
        </p>
        <p>
            E-commerce websites typically display porducts or services of
            a detailed descriptions, images, prices, and any available variants
            
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
