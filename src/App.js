import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//CSS
import "./Custom.css";
import LinkContainer from "react-router-bootstrap/lib/LinkContainer";
import Navbar from "react-bootstrap/Navbar";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons/";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Components
import Summary from "./MainComponents/Summary";
import ScrollTop from "./MainComponents/HelperFunctions/ScrollTop";
import Modify from "./MainComponents/Modify";

// testing data
let data = {
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
  mortgageLength: 10,
  progressPercent: 0.08
};

function App() {
  const [user, setUser] = useState(data);

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
              <Summary user={user} />
            </Route>
            <Route path="/modify">
              <Modify user={user} setUser={setUser} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
