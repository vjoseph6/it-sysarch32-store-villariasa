import React from "react";
import Logo from "../assets/imagesKumo/logo.png";

function ContactSection() {
  return (
    <section className="contact">
      <div className="contact-info">
        <div className="first-info">
          <img src={Logo} alt="" />
          <p>
            405 L.Jayme Street, <br /> Bakilid Mandaue City
          </p>
          <p>09224308240</p>
          <p>vjosephlhee@gmail.com</p>

          <div className="social-icon">
            <a href="#">
              <i className="bx bxl-facebook"></i>
            </a>
            <a href="#">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="#">
              <i className="bx bxl-instagram"></i>
            </a>
            <a href="#">
              <i className="bx bxl-youtube"></i>
            </a>
            <a href="#">
              <i className="bx bxl-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="second-info">
          <h4>Support</h4>
          <p>Contact us</p>
          <p>About Page</p>
          <p>Size Guide</p>
          <p>Shopping & Resturns</p>
          <p>Privacy</p>
        </div>

        <div className="third-info">
          <h4>Shop</h4>
          <p>Men's Shopping</p>
          <p>Women's Shopping</p>
          <p>Kid's Shopping</p>
          <p>Furniture</p>
          <p>Discount</p>
        </div>

        <div className="fourth-info">
          <h4>Company</h4>
          <p>About</p>
          <p>Blog</p>
          <p>Affiliate</p>
          <p>Login</p>
        </div>

        <div className="five-info">
          <h4>Subscribe</h4>
          <p>
            Receive Updates, Hot Deals, Discount Sent Straight In Your Inbox
            Daily
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Receive Updates, Hot Deals, Discount Sent Straight In Your Inbox
            Daily
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
