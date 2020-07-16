import React, {useEffect, useState} from 'react';
import getGifs from './services/getGifs';

function App() {
  const [gif, setGif] = useState([])
  useEffect(function () {
    getGifs().then(gifs => setGif(gifs))
  }, [])
  return (
    <div className="App">
      <section className="App-content">
        {
          gif.map(singleGif => <img alt="gif" src={singleGif} />)
        }
      </section>
    </div>
  );
}

export default App;
