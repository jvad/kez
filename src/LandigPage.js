import React from "react";
import { Grid, Cell } from "react-mdl";
import Kex from "./Kex/kex1.jpg";

const LandigPage = () => {
  return (
    <div style={{ width: "100%", margin: "auto" }}>
      <Grid className="landing-grid">
        <Cell col={12}>
          <img src={Kex} alt="Kez" className="img-logo" />

          <div className="banner-text">
            <h1>Keziah Baguio Adorna</h1>
            <hr />
            <p>Living in Tagapul-an, Samar, Philippines.</p>
            <div className="social-links">
              <a
                href="https://www.facebook.com/keziah.adorna.7"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa fa-facebook-square" aria-hidden="true "></i>
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default LandigPage;
