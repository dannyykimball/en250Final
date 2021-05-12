import "./sim.css";
import { useState, useEffect } from "react";

export default function Sim() {
  const [energy, setEnergy] = useState([6000, 1, 1, 1]);

  useEffect(() => {
    setInterval(function () {
      for (let i = 1; i < energy.length; i++) {
        input(i);
      }
    }, 100);
  }, []);

  function input(num) {
    let list = energy;
    let cur = energy[num];
    let desired = energy[num - 1];
    if (desired / 10 > cur) {
      if (Math.floor(Math.random() * 3) >= 1) {
        cur += desired * 0.002;
      } else {
        cur -= desired * 0.001;
      }
    } else {
      if (Math.floor(Math.random() * 3) < 1) {
        cur += desired * 0.001;
      } else {
        cur -= desired * 0.002;
      }
    }
    if (cur < 0) {
      cur = 0;
    }
    energy[num] = cur;

    setEnergy(list);
  }

  function handleChange(event) {
    event.preventDefault();
    console.log(event.target.value);

    let temp = energy;
    console.log(energy);
    temp[0] = parseInt(event.target.value);

    setEnergy(temp);
    console.log(energy);
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
        <div>Tertiary Consumer 2 Energy Level: {Math.floor(energy[3])}</div>
        <div>Tertiary Consumer 1 Energy Level: {Math.floor(energy[2])}</div>
        <div>Primary Consumer Energy Level: {Math.floor(energy[1])}</div>
        <div>
          Producer Energy Level: {Math.floor(energy[0])}
          <input type="text" onChange={handleChange} />
        </div>
      </div>
    </div>
  );
}
