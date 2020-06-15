import React from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Main";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title="KBA's Personal WebPage"
            scroll
          >
            <Navigation className="menu-links">
              <Link to="/">Home</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact Me</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/contact">Contact Me</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    </div>
  );
}

export default App;
