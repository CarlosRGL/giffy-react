import React from 'react'
import ListOfGif from './components/ListOfGifs'

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <ListOfGif keyword="rick" />
      </section>
    </div>
  )
}

export default App
