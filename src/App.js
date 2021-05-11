import "./styles.css";
import Particles from "react-particles-js";

function App() {
  return (
    <div>
      <header>
        EN 250 Final
        <div className="part">
          <Particles
            params={{
              particles: {
                number: {
                  value: 50,
                },
                size: {
                  value: 3,
                },
              },
              interactivity: {
                events: {
                  onhover: {
                    enable: true,
                    mode: "repulse",
                  },
                },
              },
            }}
          />
        </div>
        <div>Energy Flow Modeling</div>
        <div className="subtitleRow">Miles Rosenberg & Daniel Kimball</div>
      </header>
      <div>Overview</div>
      <div>Derivation</div>
      <div>Applications</div>
      <div>Simulation</div>
      <div>Works Cited</div>
    </div>
  );
}

export default App;
