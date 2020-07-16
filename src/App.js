import React, { useEffect, useState } from 'react'
import getGifs from './services/getGifs'
import ListOfGif from './components/ListOfGifs'

function App() {
  const [gifs, setGif] = useState([])
  useEffect(function () {
    getGifs().then((gifs) => setGif(gifs))
  }, [])
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGif gifs={gifs} />
      </section>
    </div>
  )
}

export default App
