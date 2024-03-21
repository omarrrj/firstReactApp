import React from 'react';
import './Location.css';
function location() {
    return (
        <section>
     <div className='maps'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.657551868834!2d-2.981066123264926!3d53.403065472305755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487b21cb043332cd%3A0x4a5e04967e4bc5a8!2sOrg%C3%A2nico%20Juice%20Bar%20%26%20Eatery!5e0!3m2!1sen!2suk!4v1710897119882!5m2!1sen!2suk"
         width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
     
     </div>
    <div>
        <h2>Where to find us</h2>
        <p>Organico Juice & Eatery </p>
        <p>74 Bold St </p>
        <p>Liverpool </p>
        <p>L1 4HR </p>
        <h2>When to visit</h2>
        <p>Mon to Sun - 9am - 8pm  </p>
        <h2>How to contact</h2>
        <p className='Contact'>We aim to respond promptly to all inquiries through telephone, email, and social media, ensuring efficient assistance across various communication channels </p>
    </div>
     </section>
        
    );
  }
  
  export default location;
  