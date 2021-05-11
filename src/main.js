import "./styles.css";
import Particles from "react-particles-js";
import banner from "./img/banner.png";
import odum from "./img/odum.png";

function App() {
  return (
    <div>
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
      <div>
        <header>
          <img className="banner" src={banner} alt="banner" />
          <div>
            EN 250 Final <br />
            Energy Flow Modeling
          </div>
          <div className="subtitleRow">Miles Rosenberg & Daniel Kimball</div>
        </header>

        <div className="subsubtitleRow">Overview</div>
        <div className="content">
          <img className="odum" src={odum} alt="odum" />
        </div>

        <div className="subsubtitleRow">Derivation</div>
        <div className="content">this is content</div>

        <div className="subsubtitleRow">Applications</div>
        <div className="content">this is content</div>

        <div className="subsubtitleRow">Simulation</div>
        <div className="content">this is content</div>

        <div className="subsubtitleRow">Works Cited</div>
        <div className="content">this is content</div>
      </div>
    </div>
  );
}

export default App;
