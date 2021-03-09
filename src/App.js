
import './App.css';
import './style.css';
import imageInSrc from "./imageInSrc.png"

function App() {
  return (
    <div className="App">
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>

<h1 class="title red">Abdelaziz Siala</h1>

<br/>

<img src={imageInSrc} alt="logo"/>

<br/>

<img src="/imageInPublic.png" alt="logo1"/>

</div>

<video width="320" height="240" controls>

<source src="myVideo.mp4" type="video/mp4" />

</video>
    </div>
  );
}

export default App;
