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
    Welcome to Organico, where we're passionate about serving healthy, plant-based options that nourish both body and soul. Our vibrant juice bar and eatery offer a diverse selection of breakfast, brunch, and daytime dishes, all carefully curated to tantalize your taste buds and fuel your day. Indulge in our delectable homemade cakes, lovingly crafted with wholesome ingredients and bursting with flavor. Quench your thirst with our extensive smoothie menu, featuring an array of refreshing blends packed with vitamins and nutrients. At Organico, we're committed to providing delicious, nutrient-rich options that support your wellness journey. Join us and experience the goodness of plant-based living in every bite and sip." </p>
    </div>
  </div>
</div>
</section>
  );
}

export default AboutUs;
