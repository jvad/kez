import React from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import Kex from "./Kex/kex1.jpeg";

const Contact = () => {
  return (
    <div className="contact-body">
      <Grid className="contact-grid">
        <Cell col={6}>
          <h2>Keziah Baguio Adorna</h2>
          <img src={Kex} alt="" style={{ height: "250px" }} />
          <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
            Hello EveryOne!! Welcome To Contact Me Page. This is Keziah Baguio
            Adorna.
            <br />
            Here You guys can find my contact details.
          </p>
        </Cell>
        <Cell col={6}>
          <h2>Contact Me</h2>
          <hr />
          <div className="contact-list">
            <List>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Old Standard TT" }}
                >
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  +639056050967
                </ListItemContent>
              </ListItem>
              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Old Standard TT" }}
                >
                  <i className="fa fa-phone-square" aria-hidden="true" />
                  +639469627533
                </ListItemContent>
              </ListItem>

              <ListItem>
                <ListItemContent
                  style={{ fontSize: "30px", fontFamily: "Old Standard TT" }}
                >
                  <i className="fa fa-envelope" aria-hidden="true" />
                  ahna.k16@gmail.com
                </ListItemContent>
              </ListItem>
            </List>
          </div>
        </Cell>
      </Grid>
    </div>
  );
};

export default Contact;
