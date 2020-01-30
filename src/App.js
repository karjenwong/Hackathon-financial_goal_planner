import React from "react";
import "./Custom.css";
import Summary from "./Components/Summary";
import Popup from "./Components/Popup";
import ScrollTop from "./Components/ScrollTop";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LinkContainer from "react-router-bootstrap/lib/LinkContainer";

import Navbar from "react-bootstrap/Navbar";

import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let user = {
  Name: "Jack Smith",
  customer: 12345,
  currentlySaved: 150000,
  remaining: 250000,
  monthlySaving: 2500,
  dateCreated: new Date("Sept 4, 2019"),
  expectedCompletion: new Date("Jan 4, 2028"),
  advisor: { name: "Steve Chan", title: "Financial Wealth Manager" },
  house_cost: 2000000,
  downPaymentPercent: 0.2,
  mortgageRate: 0.45,
  mortgageLength: 10
};
function App() {
  return (
    <div className="App">
      <Router>
        <ScrollTop />
        <div>
          <Navbar expand="lg" className="navBarCustom">
            <LinkContainer to="/">
              <Navbar.Brand className="arrow">
                <FontAwesomeIcon icon={faAngleLeft} />
              </Navbar.Brand>
            </LinkContainer>
            <Navbar.Brand>
              House Plan {user.expectedCompletion.getFullYear()}
            </Navbar.Brand>
            <div></div>
          </Navbar>

          <Switch>
            <Route exact path="/">
              <Summary />
            </Route>
            <Route path="/modify">
              <Modify />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

function Modify() {
  const format = x =>
    "$" + x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  const dateFormat = x =>
    x.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  const percent = x => (x * 100).toFixed(1) + "%";
  return (
    <div id="modify">
      <section id="progress">
        <div className="customHeading">Progress</div>
        <p className="flex">
          <img className="width" src="/images/placeholder.png" alt="bar"></img>
        </p>
        <div className="customCard">
          <div>Currently Saved</div>
          <input type="text" placeholder={format(user.currentlySaved)} />
        </div>
        <div className="customCard">
          <div>Leftover Amount</div>
          <div>{format(user.remaining)}</div>
        </div>
        <div className="customCard">
          <div>Monthly Savings</div>
          <input type="text" placeholder={format(user.monthlySaving)} />
        </div>
        <div className="customCard">
          <div>Date Created</div>
          <div>{dateFormat(user.dateCreated)}</div>
        </div>
        <div className="customCard">
          <div>Expected End Date</div>
          <div>{dateFormat(user.expectedCompletion)}</div>
        </div>
      </section>
      <section id="advisor">
        <div className="customHeading">Advisor</div>
        <div className="advisorCard">
          <div>
            <div>{user.advisor.name}</div>
            <div className="advisorTitle">{user.advisor.title}</div>
          </div>
          <div className="iconContainers">
            <img className="icon" src="/images/message.png" alt="message" />
            <div className="spacer"></div>
            <img
              className="icon"
              src="/images/call_button.png"
              alt="call button"
            />
          </div>
        </div>
      </section>
      <section id="planDetails">
        <div className="customCard">
          <div>House Cost</div>
          <div>{format(user.house_cost)}</div>
        </div>
        <div className="customCard">
          <div>Down Payment %</div>
          <div>{percent(user.downPaymentPercent)}</div>
        </div>
        <div className="customCard">
          <div>Mortgage Rate</div>
          <div>{percent(user.mortgageRate)}</div>
        </div>
        <div className="customCard">
          <div>Mortgage Length</div>
          <div>
            {user.mortgageLength} year{user.mortgageLength > 2 ? "s" : ""}
          </div>
        </div>
      </section>
      <div className="flex">
        <LinkContainer to="/">
          <button type="button" className="cancelButton">
            Cancel
          </button>
        </LinkContainer>
        <div className="spacer"></div>
        <Popup />
      </div>
    </div>
  );
}

export default App;
