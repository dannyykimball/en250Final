import "./sim.css";
import hawkimg from "./img/hawk.jpg";
import snakeimg from "./img/snake.jpg";
import bunnyimg from "./img/bunny.jpg";
import grassimg from "./img/grass.jpg";
import { useState, useEffect } from "react";

export default function Sim() {
  const [grass, setGrass] = useState();
  useEffect(() => {
    setGrass(100);
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
        </div>
        <div className="animal">
          <img className="animalimg" src={snakeimg} alt="snake" />
        </div>
        <div className="animal">
          <img className="animalimg" src={bunnyimg} alt="bunny" />
        </div>
        <div className="animal">
          <img className="animalimg" src={grassimg} alt="grass" />
        </div>
      </div>
    </div>
  );
}
