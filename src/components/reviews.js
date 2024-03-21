import React from 'react';
import './reviews.css';
import Burgers from "../images/Burgers.jpg"
function reviews() {
    return (
        <div class="carouselR">
        <div id="carouselExampleIndicators" class="carousel slide">
          <div class="carousel-inner">
          <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
            <div class="carousel-item active">
              <h1 class="reviewName">Al Jones</h1>
              <img src={Burgers} class="review1" alt="..."/>
              <p class="reviewText">Had a lovely lunch here today with my eldest daughter as an impromptu visit whilst shopping in Bold Street, Liverpool. Very nice staff who were really helpful and attentive. Great choice of vegan and vegetarian dishes, including  all-day breakfast, brunch and lunch options. Also, vegan sweet treats and cakes, fresh smoothies and juices. Food was freshly prepared and was delicious. We will be back!</p>
              <div class ="stars">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..."/>
            </div>
            <div class="carousel-item">
              <img src="..." class="d-block w-100" alt="..."/>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      
      </div>
      
    );
}

export default reviews;


