import "./styles.css";
import banner from "./img/banner.png";

export default function Sim() {
  return (
    <div>
      <header>
        <img className="banner" src={banner} alt="banner" />
        <div>
          EN 250 Final <br />
          Energy Flow Modeling
        </div>
        <div className="subtitleRow">Miles Rosenberg & Daniel Kimball</div>
      </header>
      <div>sim</div>
    </div>
  );
}
