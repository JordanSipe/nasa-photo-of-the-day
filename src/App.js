import React, { useEffect } from "react";
import "./App.css";
import axios from 'axios';

const [nasaData, setnasaData] = useState([]);

useEffect(() => {
  axios.get('https://api.nasa.gov/#apod?api_key=DEMO_KEY')
  .then(res => {
    setnasaData(res.data);
  })
  .catch(err => {
    console.log(err);
  })
})

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
