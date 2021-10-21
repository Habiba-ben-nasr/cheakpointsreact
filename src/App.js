import imageInSrc from "./imageInSrc.jpg";
import './App.css';

function App() {
  return (
    <div>
      <div className="mesenfants" style={{ border:'solid 1px black', maxWidth:'100vw'}}>
        <h1 className="titleRed">Mes champions</h1>
        <br/>
        <h2 className="kikou">Haroun</h2>
        <img className="kikou" src={imageInSrc} alt="msrc" />
        <br/>
        <h2 className="kikou">Ibrahim</h2>
        <img className="kikou" src="./imageInPublic.jpg" alt="img"/>
      </div>
    </div>

  );
}

export default App;
