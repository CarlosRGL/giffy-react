import React, {useEffect, useState} from 'react';
import getGifs from './services/getGifs';
import Gif from './components/Gif';

function App() {
  const [gif, setGif] = useState([])
  useEffect(function () {
    getGifs().then(gifs => setGif(gifs))
  }, [])
  return (
    <div className="App">
      <section className="App-content">
        {
          gif.map(({id, title, url}) =>
            <Gif
              key = {id}
              title={title}
              url={url}
              id={id}
            />
          )
        }
      </section>
    </div>
  );
}

export default App;
