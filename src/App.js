import React from 'react'
import ListOfGif from './components/ListOfGifs'

function App() {
  return (
    <div className="App bg-gray-200">
      <section className="container mx-auto flex flex-col">
        <ListOfGif keyword="rick" />
      </section>
    </div>
  )
}

export default App
