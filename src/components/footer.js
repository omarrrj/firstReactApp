import React from 'react';
import './footer.css'; 
import logo from '../images/logo.png';

function footer() {
  return (
    <footer class="footer">
    <div class="container">
        <div class="row">
           
            <div class="footer-col">
                <h4>Organico</h4>
                <ul>
                    <li><a href="#about">about us</a></li>
                    <li><a href="#menu">menu</a></li>
                    <li><a href="#location">where to find us </a></li>
                    <li><a href="#reviews">reviews</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>our location</h4>
                <ul>
                    <li><a href="#">Organico Juice Bar & eatery</a></li>
                    <li><a href="#">74 bold st</a></li>
                    <li><a href="#">liverpool</a></li>
                    <li><a href="#">L1 4HR </a></li>
                    <li><a href="#">mon to sun - 9am-8pm</a></li>
                </ul>
            </div>
            
            <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a href="https://www.facebook.com/organicoliverpool/"><i class="bi bi-facebook"></i></a>
                    <a href="https://www.instagram.com/organicoliverpool/"><i class="bi bi-instagram"></i></a>
                    <a href="https://twitter.com/OrganicoLiverp"><i class="bi bi-twitter"></i></a>
                    <a href="https://www.google.com/search?q=organico+juice+bar+and+eatery&sca_esv=def40fa9418a875e&ei=fHr8ZbbrJLC7hbIPp4WnyAM&gs_ssp=eJzj4tVP1zc0LMw1LikxNS03YLRSNagwsTBPMjJMTjIwMTY2NkpOsQIKJZqmGphYmpmnmiQlmyZaeMnmF6Un5mUm5ytklWYmpyokJRYpJOalKKQmlqQWVQIADwsZ9g&oq=organico+juice+ba&gs_lp=Egxnd3Mtd2l6LXNlcnAiEW9yZ2FuaWNvIGp1aWNlIGJhKgIIADIOEC4YgAQYxwEYrwEYjgUyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yCxAAGIAEGIoFGIYDMgsQABiABBiKBRiGAzILEAAYgAQYigUYhgMyHRAuGIAEGMcBGK8BGI4FGJcFGNwEGN4EGOAE2AEBSP4mULwFWIQgcAF4AZABAJgBmgGgAY8NqgEDOC44uAEDyAEA-AEBmAINoAKfDcICChAAGEcY1gQYsAPCAg0QABiABBiKBRhDGLADwgITEC4YgAQYigUYQxjHARivARiOBcICBRAAGIAEwgIiEC4YgAQYigUYQxjHARivARiOBRiXBRjcBBjeBBjgBNgBAcICCxAuGIAEGMcBGNEDwgILEC4YgAQYxwEYrwHCAgsQLhivARjHARiABMICCBAAGBYYHhgKwgIIEAAYFhgeGA-YAwCIBgGQBgi6BgYIARABGBSSBwQxLjEyoAeLqwE&sclient=gws-wiz-serp"><i class="bi bi-google"></i></a>
                </div>
            </div>
        </div>
    </div>
</footer>
  );
}

export default footer;
