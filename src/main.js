import "./styles.css";
import Particles from "react-particles-js";
import banner from "./img/banner.png";
import odum from "./img/odum.png";
import energy from "./img/energy.jpeg";
import pyramid from "./img/pyramid.jpeg";
import temp from "./img/temp.png";
import hist from "./img/hist.png";
import wow from "./img/wow.png";

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
          <div className="contextText">
            The purpose of the energy flow model is to link the transfers of
            energy in an ecosystem to show both the inputs and losses of energy.
            <br />
            <br />
            As the more trophic levels are added to an ecosystem, more energy is
            loss overall from the producers to the apex predators.
          </div>
        </div>

        <div className="subsubtitleRow">History</div>
        <div className="content">
          <img className="odum" src={hist} alt="odum" />
          <div className="contextText">
            The early concepts Energy Flow Model is believed to have come around
            during the enlightenment.
            <br />
            <br />
            Sergei Podolinsky was a Russian physician who was an early pioneer
            of the Energy Flow Model.
            <br />
            <br />
            The Energy Flow Model was further developed by Vladmir Stanchisky,
            Alfred J. Lotka, Raymond Lindeman, and G. Evelyn Hutchinson.
          </div>
        </div>

        <div className="subsubtitleRow">Derivation</div>
        <div className="content">
          <div className="contextText">
            According to the Second Law of Thermodynamics, transformation of
            energy always results in loss/dissipation of energy.
            <br />
            <br />
            Energy Loss is how efficient energy transfer is from one level to
            another. Only about 10% of energy is transferred from each level to
            the next.
          </div>
          <img className="odum" src={energy} alt="energy" />
        </div>

        <div className="subsubtitleRow">Applications</div>
        <div className="content">
          <img className="odum" src={pyramid} alt="pyramid" />
          <div className="contextText">
            Because of the energy loss between levels, it is often portrayed as
            an energy pyramid.
            <br />
            <br />
            The tertiary consumers are always the fewest in number because not
            enough energy can be transferred to sustain a larger population.
          </div>
        </div>

        <div className="subsubtitleRow">Applying the Model</div>
        <div className="content">
          <div className="contextText">
            Similar to the graph on the right, we wanted to create a live
            simulation when there was a set energy level of producers in an
            environment.
            <br />
            <br />
            We wanted to keep track of energy loss in real time across trophic
            levels and update them as they adjusted to their next environment.
          </div>
          <img className="odum" src={wow} alt="wow" />
        </div>

        <div className="subsubtitleRow">Simulation</div>
        <div className="content">
          <div className="contextText">
            Our simulation for this final takes energy levels in a food pyramid
            and updates them with changes in the ecosystem.
            <br />
            <br />
            <a href="/simulation">Click here to be taken to the simulation</a>
          </div>
          <img className="odum" src={temp} alt="temp" />
        </div>

        <div className="subsubtitleRow">Sources</div>
        <div className="content">
          <div className="contextText">
            https://www.notesonzoology.com/ecology/top-3-models-of-energy-flow-in-a-community-ecology/4220
            <br />
            https://en.wikipedia.org/wiki/Energy_flow_(ecology) <br />
            https://www.britannica.com/science/trophic-pyramid <br />
            https://courses.lumenlearning.com/wm-biology2/chapter/energy-flow-through-ecosystems/
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
