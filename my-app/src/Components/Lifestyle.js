import React from "react";
import { FaFacebookSquare, FaStar } from "react-icons/fa";

// Importing images
import carouselImage1 from "../images/2-qbpztevmcwd9ftlopd0kw1h3e8wh24zt4phjyjajzs.jpg";
import carouselImage2 from "../images/3-qbpztkinhwkzdhdhsfgcb01uyk4ocbm75hegu726yg.jpg";
import carouselImage3 from "../images/5-qbpzts1d0kv9yd2kkipcuy5jpn3m1wg1uimcoer1ko.jpg";
import image4 from "../images/residential-plots-img.jpg";
import image5 from "../images/commercial-plots.jpg";
import image6 from "../images/villa.jpg";
import image7 from "../images/mall-1.jpg";
import lakecity from "../images/Lake-City-.jpg";
import logo from "../images/Lake-City-Logo-png-1-1024x1009 (1).png";
import cardimage1 from "../images/Untitled_design__5_-removebg-preview.png";
import cardimage2 from "../images/Untitled_design__6_-removebg-preview.png";
import cardimage3 from "../images/Untitled_design__7_-removebg-preview.png";
import cardimage4 from "../images/Changes-removebg-preview.png";
import contacticon from "../images/user.png";

const Lifestyle = () => {
  return (
    <div>
      {/* Amenities and lifestyle  */}
      <section className="bg-color">
        <div className="container py-5 ">
          <div className="row align-items-start">
            <div className="col-lg-6 text-start">
              {/* Heading and introduction */}
              <h1 className="col-txt"> AMENITIES AND LIFESTYLE </h1>
              <p className="col-txt1">
                {/* Description of amenities */}
                Lake City takes pride in providing desirable, pleasant amenities
                to its customers and visitors, ensuring convenience and
                satisfaction. They are built upon the perspective and vision to
                provide the highest quality of lifestyle as these wide range of
                facilities secure contentment and gratification for the
                residents of Lake City, elevating their standard of living to
                the maximum.
              </p>
              {/* Read more button */}
              <button
                type="button"
                className="btn btn-primary"
                id="read-more-button"
              >
                Read More
              </button>
            </div>
            {/* carousel slide */}
            <div className="col-lg-6">
              <div id="carouselExample" className="carousel slide">
                {/* Carousel images */}
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src={carouselImage1}
                      className="d-block w-100 h-50"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img src={carouselImage2} className="d-block w-100" alt="..." />
                  </div>
                  <div className="carousel-item">
                    <img src={carouselImage3} className="d-block w-100" alt="..." />
                  </div>
                </div>
                {/* Carousel navigation buttons */}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
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
                  data-bs-target="#carouselExample"
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
          </div>
        </div>
      </section>

      {/* Residential Plots Section */}
      <section className="section">
        <div className="container text-center bg-white">
          <div className="row align-items-start">
            <div className="col-lg-6">
              {/* Heading and description for residential plots */}
              <h1 className="col-txt2">RESIDENTIAL PLOTS</h1>
              <p className="col-txt3">
                {/* Description of residential plots */}
                Having state-of-the-art residential living standards, all our
                sectors contain a variety of residential plot sizes ranging from
                5 Marla to 2 Kanals catering to clients from all walks of life.
                The highest quality standards are provided, along with
                well-defined infrastructure, well-maintained community parks,
                underground electrification, resource availability, a serene
                environment, commercial convenience, a wide sector road network,
                and independently gated sectors for the highest quality
                security.
              </p>
              {/* Read more button */}
              <button
                type="button"
                className="btn btn-primary"
                id="read-more-button1"
              >
                Read More
              </button>
            </div>
            {/* Image for residential plots */}
            <div className="col-lg-6 ">
              <img src={image4} alt="" className="image img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Properties Section */}
      <div className="container text-center bg-white">
        <div className="row align-items-start">
          <div className="col-lg-6 ">
            {/* Image for commercial properties */}
            <img src={image5} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 ">
            {/* Heading and description for commercial properties */}
            <h1 className="col-txt2">COMMERCIAL PROPERTIES</h1>
            <p className="col-txt3">
              {/* Description of commercial properties */}
              Consisting of Commercial sectors which are Business Bay
              District, Central Commercial Boulevard, and Canal Commercial, it
              provides customers an array of options; commercial areas provide
              ease of access and convenience to esteemed residents and
              visitors.
            </p>
            {/* Read more button */}
            <button
              type="button"
              className="btn btn-primary"
              id="read-more-button1"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Residential Villas Section */}
      <div className="container text-center bg-white">
        <div className="row align-items-start">
          <div className="col-lg-6 ">
            {/* Heading and description for residential villas */}
            <h1 className="col-txt2">RESIDENTIAL VILLAS</h1>
            <p className="col-txt3">
              {/* Description of residential villas */}
              State-of-the-art Residential Villas designed by renowned,
              internationally acclaimed designers and architect firms of the
              world, ensuring a perfect blend of contemporary and class for
              highly valued residents.
            </p>
            {/* Read more button */}
            <button
              type="button"
              className="btn btn-primary"
              id="read-more-button1"
            >
              Read More
            </button>
          </div>
          {/* Image for residential villas */}
          <div className="col-lg-6">
            <img src={image6} alt="" className="img-fluid" />
          </div>
        </div>
      </div>

      {/* Lake City Mall Section */}
      <div className="container text-center bg-white">
        <div className="row align-items-start">
          <div className="col-lg-6 ">
            {/* Image for Lake City Mall */}
            <img src={image7} alt="" className="img-fluid" />
          </div>
          <div className="col-lg-6 ">
            {/* Heading and description for Lake City Mall */}
            <h1 className="col-txt2">LAKE CITY MALL</h1>
            <p className="col-txt3">
              {/* Description of Lake City Mall */}
              A state-of-the-art commercial development located in the heart
              of Lake City Lahore. Lake City Mall features a signature design
              by the renowned architect Nayyar Ali Dada, who is responsible
              for envisioning various landmarks of Pakistan. The mall is
              spread over an extensive area of 40 kanals, along with a car
              park that accommodates over 350+ vehicles.
            </p>
            {/* Read more button */}
            <button
              type="button"
              className="btn btn-primary"
              id="read-more-button1"
            >
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* News and Feeds Section */}
      <section className="bg-light text-center p-5">
        <h1 className="text-warning "> NEWS AND FEEDS </h1>
        <img
          src={lakecity}
          alt=""
          className="rounded mx-auto d-block img-fluid city-lake-image"
        />
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              <img src={logo} alt="" className="logo" />
            </div>
            <div className="col text-start">
              {/* Information about Lake City Lahore */}
              <h5>LAKE CITY LAHORE</h5>
              <p>
                Lake City is one of the largest real estate projects in Pakistan
                offering unique luxurious lifestyle.
              </p>
            </div>
            <div className="col">
              {/* Facebook like button */}
              <button className="fb">
                <FaFacebookSquare className="likes"></FaFacebookSquare>
                <span className="likes">5.4k Likes</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="bg-black text-warning text-center">
        <h1> COMING SOON</h1>
        <div className="container d-flex p-5">
          {/* Cards with images (Coming Soon) */}
          <div className="card mx-2">
            <img src={cardimage1} className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>
          <div className="card mx-2">
            <img src={cardimage2} className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>
          <div className="card mx-2">
            <img src={cardimage3} className="card-img-top" alt="..." />
            <div className="card-body"></div>
          </div>
          <div className="card mx-2">
            <img src={cardimage4} className="card-img-top " alt="..." />
            <div className="card-body"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-warning text-center font-weight-bold p-5">
        <h1> TESTIMONIALS </h1>
        <div className="container mt-5 mb-5">
          <div className="row g-3">
            {/* Testimonial 1 */}
            <div className="col-md-4">
              <div className="card p-3 px-4">
                <div className="user-image"></div>

                <div className="user-content text-start m-4">
                  {/* Testimonial content */}
                  <h5 className="mb-0">
                    {" "}
                    <img src={contacticon} alt="" /> Mohammad Danish
                  </h5>
                  <p>
                    The Golf Course at Lake City exceeds all standards. My golfing experience makes
                    my living experience here worth every second!
                  </p>
                </div>

                <div className="ratings text-start">
                  {/* Star ratings */}
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="col-md-4">
              <div className="card p-3 text-center px-4">
                <div className="user-image"></div>

                <div className="user-content text-start m-4">
                  {/* Testimonial content */}
                  <h5 className="mb-0">
                    <img src={contacticon} alt="" /> Mannan Sheikh{" "}
                  </h5>
                  <p>
                    The presence of Lake City Mall covers all my shopping needs! It has all the popular brands and the restaurants here are fantastic.
                  </p>
                </div>

                <div className="ratings text-start">
                  {/* Star ratings */}
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="col-md-4">
              <div className="card p-3 text-center px-4">
                <div className="user-image"></div>

                <div className="user-content text-start m-4">
                  {/* Testimonial content */}
                  <h5 className="mb-0">
                    {" "}
                    <img src={contacticon} alt="" /> Mohd Zeeshan{" "}
                  </h5>
                  <p>
                    Living at Lake City feels wonderful. From commercial options and living comfort, it provides an amazing living experience.
                  </p>
                </div>

                <div className="ratings text-start ">
                  {/* Star ratings */}
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lifestyle;
