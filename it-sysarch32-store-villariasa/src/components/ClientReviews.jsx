import React from "react";
import Team1 from "../assets/imagesKumo/team-1.jpg";

function ClientReviews() {
  return (
    <section className="client-reviews">
      <div className="reviews">
        <h3>Client Reviews</h3>
        <img src={Team1} alt="" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h2>Mark Zuckerberg</h2>
        <p>CEO of Meta</p>
      </div>
    </section>
  );
}

export default ClientReviews;
