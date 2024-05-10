import React from "react";

function MainSection() {
  return (
    <section className="main-home">
      <div className="main-text">
        <h5>Hasil Collection</h5>
        <h1>
          Hasil Hard <br /> Collection 2024{" "}
        </h1>
        <p>Bisaya ni Bai!</p>

        <a href="#" className="main-btn">
          Shop Now<i className="bx bx-right-arrow-alt"></i>
        </a>

        <div className="down-arrow">
          <a href="#trending" className="down">
            <i className="bx bx-down-arrow-alt"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default MainSection;
