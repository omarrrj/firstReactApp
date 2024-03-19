// AboutUs.js
import React from 'react';
import './aboutUs.css'; 
import image1 from '../images/Panini.jpg'; // Import your images
import image2 from '../images/Salad.jpg';

function AboutUs() {
  return (
    <section className="about-us">
        <div className="about-us-container">
        <img src={image1} alt="Image 1" className="about-us-image" />
        <img src={image2} alt="Image 2" className="about-us-image-lower" />
<div className="about-us-box">
  <h2 className="about-us-header">About Us</h2>
  <div className="about-us-content">
    <p>
    Organico is a healthy, plant-based juice bar and eatery serving up a range of breakfast,brunch and daytime dishes alongside a range 
        of homemade cakes and an extensive smoothie menu.    </p>
    </div>
  </div>
</div>
</section>
  );
}

export default AboutUs;
