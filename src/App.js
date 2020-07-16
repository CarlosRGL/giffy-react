import React from 'react'
import { Link, Route } from "wouter";
import ListOfGifs from './components/ListOfGifs'

function App() {
  return (
    <div className="App bg-gray-200">
      <section className="container mx-auto flex flex-col">
        <h1>Giffy</h1>
        <Link to={'/gif/rick'}>Rick</Link>
        <Route
          path="/gif/:keyword"
          component={ListOfGifs}
        />
      </section>
    </div>
  )
}

export default App
