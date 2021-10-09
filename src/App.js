import "./App.css";
import ParticleBackground from "./ParticleBackground";

function App() {
  return (
    <div>
      <ParticleBackground />
      <CenterTitle />
      <h1 className="another">hii</h1>
      
    </div>
  );
}

function CenterTitle() {
  return (
    <div id="text_div center_all">
      <div className="center_all">
        <h1 className="custom-subTitle">Welcome to I-Vote</h1>
      </div>
    </div>
  );
}

export default App;
