import "./sim.css";
import hawkimg from "./img/hawk.jpg";
import snakeimg from "./img/snake.jpg";
import bunnyimg from "./img/bunny.jpg";
import grassimg from "./img/grass.jpg";
import { useState, useEffect } from "react";

export default function Sim() {
  const [hawk, setHawk] = useState();
  const [snake, setSnake] = useState();
  const [bunny, setBunny] = useState();
  const [grass, setGrass] = useState();
  useEffect(() => {
    setHawk(4);
    setSnake(25);
    setBunny(400);
    setGrass(2000);
  }, []);

  return (
    <div>
      <header>
        <div>Energy Flow Simulation</div>
        <div className="subtitleRow">
          <a href="/">{`<-`} Back</a> Miles Rosenberg & Daniel Kimball{" "}
        </div>
      </header>

      <div className="simmmer">
        <div className="animal">
          <img className="animalimg" src={hawkimg} alt="hawk" />
          {hawk}
        </div>
        <div className="animal">
          <img className="animalimg" src={snakeimg} alt="snake" />
          {snake}
        </div>
        <div className="animal">
          <img className="animalimg" src={bunnyimg} alt="bunny" />
          {bunny}
        </div>
        <div className="animal">
          <img className="animalimg" src={grassimg} alt="grass" />
          {grass}
        </div>
      </div>
    </div>
  );
}
