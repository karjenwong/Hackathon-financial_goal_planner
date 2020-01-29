import React, { useState } from "react";
import "./Custom.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import DatePicker from "react-date-picker";

function App() {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState("");
  const [savings, setSavings] = useState("");
  const [date, setDate] = useState(new Date());
  const [slider, setSlider] = useState("1000");

  const handleSubmit = e => {
    e.preventDefault();
    console.log({
      name: name,
      goal: goal,
      savings: savings,
      date: date.toString()
    });
  };

  return (
    <div className="App">
      <section className="margin">
        <Form onSubmit={handleSubmit}>
          <Form.Group >
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Form.Label>Goal ${goal}</Form.Label>
            <Form.Control
              type="number"
              value={goal}
              onChange={e => setGoal(e.target.value)}
            />
            <Form.Label>Current Savings $</Form.Label>
            <Form.Control
              type="number"
              value={savings}
              onChange={e => setSavings(e.target.value)}
            />
            <Form.Label>
              Date{" "}
              <DatePicker
                className="margin"
                onChange={e => setDate(e)}
                value={date}
              />
            </Form.Label>
          </Form.Group>
          <Form.Group>
            <Form.Label>Monthly Expenses ${slider}</Form.Label>
            <Form.Control
              type="number"
              onChange={e => {
                console.log(e.target.value);
                setSlider(e.target.value);
              }}
            />
            <Form.Control
              type="range"
              value={slider}
              min={0}
              max={10000}
              onChange={e => {
                console.log(e.target.value);
                setSlider(e.target.value);
              }}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </section>
 
    </div>
  );
}

export default App;
