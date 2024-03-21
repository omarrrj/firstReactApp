import React from 'react';
import image1 from '../images/Eggs.jpg'; // Import your images
import image2 from '../images/Wedges.jpg';
import image3 from '../images/Smoothie.jpg'; // Import your images
import './menu.css';

function Menu() {
    return (
      <section className="menu-section">
        <div className="menu-content">
        <div className="text-content">
            <h2 className="menu-header">Our Menu</h2>
            <p className="paragraph">
            Explore our diverse menu featuring a range of breakfast, brunch, and daytime dishes carefully crafted to delight your taste buds. Indulge in our selection of homemade cakes, baked fresh daily, or dive into our extensive smoothie menu, offering a refreshing blend of flavors to energize your day. Whether you're craving a hearty meal or a nutritious beverage, we have something to satisfy every palate and craving at our restaurant.
            </p>
            <button>See here</button>
          </div>
          <div className="images-container">
            <img src={image1} alt="Image 1" className="images" />
            <img src={image2} alt="Image 2" className="images" />
            <img src={image3} alt="Image 3" className="images" />
          </div>
        
        </div>
      </section>
    );
  }
  
  export default Menu;
  