import "./sim.css";
import { useState, useEffect } from "react";
import first from "./img/1.jpg";
import second from "./img/2.jpg";
import third from "./img/3.jpg";
import fourth from "./img/4.jpg";
import Chart from "react-google-charts";

export default function Sim() {
  let init = {
    first: 5000,
    second: 0,
    third: 0,
    fourth: 0,
    loss1: 0,
    loss2: 0,
    loss3: 0,
    loss: 0,
  };
  const [energy, setEnergy] = useState(init);
  const [form, setForm] = useState();
  const [asdf, setasdf] = useState();
  const [dataState, setDataState] = useState([
    [
      "x",
      "Producer",
      "Primary Consumer",
      "Tertiary Consumer 1",
      "Tertiary Consumer 2",
    ],
    [0, 5000, 0, 0, 0],
  ]);

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

    temp.loss1 = temp.first - temp.second;
    temp.loss2 = temp.second - temp.third;
    temp.loss3 = temp.third - temp.fourth;
    temp.loss = temp.loss1 + temp.loss2 + temp.loss3;

    let tempdata = dataState;

    console.log(tempdata);
    tempdata.push([counter, temp.first, temp.second, temp.third, temp.fourth]);
    console.log(tempdata);
    setDataState(tempdata);

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
        <div key={"5" + energy.loss}>
          Total Energy Loss in the System:{" "}
          <input
            readOnly
            value={
              Math.floor(energy.loss1) +
              " + " +
              Math.floor(energy.loss2) +
              " + " +
              Math.floor(energy.loss3) +
              " = " +
              Math.floor(energy.loss)
            }
          />{" "}
          kj
        </div>

        <div key={"4" + energy.fourth}>
          Tertiary Consumer 2 Energy Level:{" "}
          <input readOnly value={Math.floor(energy.fourth)} /> kj
        </div>
        <img src={fourth} alt="React Logo" />

        <div key={"3" + energy.third}>
          Tertiary Consumer 1 Energy Level:{" "}
          <input readOnly value={Math.floor(energy.third)} /> kj
        </div>
        <img src={third} alt="React Logo" />

        <div key={"2" + energy.second}>
          Primary Consumer Energy Level:{" "}
          <input readOnly value={Math.floor(energy.second)} /> kj
        </div>
        <img src={second} alt="React Logo" />

        <div key={"1" + energy.first}>
          Producer Energy Level:{" "}
          <input readOnly value={Math.floor(energy.first)} /> kj
          <img src={first} alt="React Logo" />
          <br />
          New Energy Value
          <form>
            <label>
              <input type="text" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" onClick={handleSubmit} />
          </form>
        </div>
        <Chart
          width={"600px"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={dataState}
          options={{
            hAxis: {
              title: "Time (days)",
            },
            vAxis: {
              title: "Energy Level (kj)",
              scaleType: "log",
            },
            series: {
              0: { color: "green" },
              1: { color: "#9b870c", curveType: "function" },
              2: { color: "blue" },
              3: { color: "red" },
            },
          }}
          rootProps={{ "data-testid": "2" }}
        />
        <Chart
          width={"600px"}
          height={"400px"}
          chartType="LineChart"
          loader={<div>Loading Chart</div>}
          data={dataState}
          options={{
            hAxis: {
              title: "Time (days)",
            },
            vAxis: {
              title: "Energy Level (kj)",
            },
            series: {
              0: { color: "green" },
              1: { color: "#9b870c", curveType: "function" },
              2: { color: "blue" },
              3: { color: "red" },
            },
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    </div>
  );
}
