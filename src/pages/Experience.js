import React from 'react';
import '../style.css';
import Header from '../components/Header.js';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';

const Experience = () => (
  <div className="content">
    <Header />
    <Navbar />
    <h1 className="text-center mt-5 mb-5">Experience</h1>

    <div className="container-sm slideshow mb-5">
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBeENrQ1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--c1a78613357341b258939a0d954b2574c9ad22ce/Hooked-On-Fishing.png"
              className="d-block w-100"
              alt="Hooked-On-Fishing-Websites"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Hooked on Fishing</h3>
              <h3>
                Main project for SWDV140 - JavaScript
                <br />
                <a
                  className="link"
                  href="https://ryantaylor23.github.io/hookedonfishingwebsite/index.html"
                  target="_blank"
                >
                  https://ryantaylor23.github.io/hookedonfishingwebsite/index.html
                </a>
              </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2020/02/04/08/29/earrings-4817566_1280.jpg"
              className="d-block w-100"
              alt="Gem-World-Bootstrap-Emerald-Jewelry-Picture"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Gem World-Bootstrap</h3>
              <h3>
                Parallax Bootstrap 5 project for SWDV 143
                <br />
                <a
                  className="link"
                  href="https://ryantaylor23.github.io/gemsworld/index.html"
                  target="_blank"
                >
                  https://ryantaylor23.github.io/gemsworld/index.html
                </a>
              </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2018/04/17/17/28/amethyst-3328166_1280.jpg"
              className="d-block w-100"
              alt="Gem-World-Amethyst-Picture"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Gem World-Vue</h3>
              <h3>
                Vue final project for SWDV 143
                <br />
                <a
                  className="link"
                  href="https://vue-jyfafd.stackblitz.io"
                  target="_blank"
                >
                  https://vue-jyfafd.stackblitz.io
                </a>
              </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2023/01/04/19/06/ai-generated-7697456_1280.jpg"
              className="d-block w-100"
              alt="Gem-World-Crystal-Home-Picture"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Gem World-React</h3>
              <h3>
                React final project for SWDV 143
                <br />
                <a
                  className="link"
                  href="https://stackblitz-starters-5r6fyr.stackblitz.io"
                  target="_blank"
                >
                  https://stackblitz-starters-5r6fyr.stackblitz.io
                </a>
              </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://cdn.pixabay.com/photo/2016/08/18/17/37/rock-crystal-1603480_1280.jpg"
              className="d-block w-100"
              alt="Gem-World-Quartz-Crystal-Picture"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Gem World-Svelte</h3>
              <h3>
                Svelte site final project for SWDV 143
                <br />
                <a
                  className="link"
                  href="https://stackblitz.com/edit/gemworld-ewz96s?file=src%2FApp.svelte"
                  target="_blank"
                >
                  https://stackblitz.com/edit/gemworld-ewz96s?file=src%2FApp.svelte
                </a>
              </h3>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://stackblitz.com/storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBMnlrQ1E9PSIsImV4cCI6bnVsbCwicHVyIjoiYmxvYl9pZCJ9fQ==--968695d79198b4c888a9cee3023cd2a7391425eb/Connect-Four.png"
              className="d-block w-100"
              alt="Connect-Four-Animation-Game"
            />
            <div className="carousel-caption d-none d-md-block">
              <h3>Connect Four</h3>
              <h3>
                Javascript Animation Game SWDV140
                <br />
                <a
                  className="link"
                  href="https://ryantaylor23.github.io/connectFour/index.html"
                  target="_blank"
                >
                  ryantaylor23.github.io/connectFour/index.html
                </a>
              </h3>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    <Footer />
  </div>
);

export default Experience;
