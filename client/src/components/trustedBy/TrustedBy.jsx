import React from "react";
import "./TrustedBy.scss";

const TrustedBy = () => {
  return (
    <div className="trustedBy">
      <div className="container">
        <span>Trusted by:</span>
        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png" alt="facebook"/>
        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png" alt="google" />
        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png" alt="netflix" />
        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png" alt="panda" />
        <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png" alt="paypal" />
      </div>
    </div>
  );
};

export default TrustedBy;
