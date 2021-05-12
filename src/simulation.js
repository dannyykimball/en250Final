import "./sim.css";
import { useState, useEffect } from "react";
import first from "./img/1.jpg";
import second from "./img/2.jpg";
import third from "./img/3.jpg";
import fourth from "./img/4.jpg";

export default function Sim() {
  let init = {
    first: 5000,
    second: 0,
    third: 0,
    fourth: 0,
  };
  const [energy, setEnergy] = useState(init);
  const [form, setForm] = useState();
  const [asdf, setasdf] = useState();

  useEffect(() => {
    setInterval(function () {
      dayPass();
    }, 200);
  }, []);

  let counter = 0;

  function dayPass() {
    console.log("day passed");
    let temp = energy;
    temp.second +=
      (energy.first / 10 - temp.second) * 0.1 +
      temp.second * (Math.random() * 2 - 1) * 0.01;
    if (temp.second < 0) {
      temp.second = 0;
    }
    temp.third +=
      (energy.second / 10 - temp.third) * 0.1 +
      temp.third * (Math.random() * 2 - 1) * 0.01;
    if (temp.third < 0) {
      temp.third = 0;
    }
    temp.fourth +=
      (energy.third / 10 - temp.fourth) * 0.1 +
      temp.fourth * (Math.random() * 2 - 1) * 0.01;
    if (temp.fourth < 0) {
      temp.fourth = 0;
    }
    setEnergy(temp);
    setasdf(counter + 1);
    counter++;
    console.log(energy);
  }

  function handleChange(event) {
    event.preventDefault();
    setForm(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let temp = energy;
    temp.first = parseInt(form);
    console.log(temp);
    setEnergy(temp);
  }

  return (
    <div>
      <header>
        <div>Energy Flow Simulation</div>
        <div className="subtitleRow">
          <a href="/">{`<-`} Back</a> Miles Rosenberg & Daniel Kimball{" "}
        </div>
      </header>
      <div className="simmmer">
        <img classname="four" src={fourth} alt="React Logo" />
        <div key={"4" + energy.fourth}>
          Tertiary Consumer 2 Energy Level:{" "}
          <input value={Math.floor(energy.fourth)} /> kj
        </div>
        <img classname="three" src={third} alt="React Logo" />
        <div key={"3" + energy.third}>
          Tertiary Consumer 1 Energy Level:{" "}
          <input value={Math.floor(energy.third)} /> kj
        </div>
        <img classname="two" src={second} alt="React Logo" />
        <div key={"2" + energy.second}>
          Primary Consumer Energy Level:{" "}
          <input value={Math.floor(energy.second)} /> kj
        </div>
        <div classname="one222">
          <img src={first} alt="React Logo" />
        </div>
        <div key={"1" + energy.first}>
          Producer Energy Level: <input value={Math.floor(energy.first)} /> kj
          <form>
            <label>
              <input type="text" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" onClick={handleSubmit} />
          </form>
        </div>
      </div>
    </div>
  );
}
