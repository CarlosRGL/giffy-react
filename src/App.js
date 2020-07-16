import React from 'react'
import { Link, Route } from "wouter";
import ListOfGifs from './components/ListOfGifs'
import  Home from "./pages/Home";
import  SearchResults  from "./pages/SearchResults";

function App() {
  return (
    <div className="App bg-gray-200">
      <section className="container mx-auto flex flex-col">
        <h1><Link to={'/'}>Giffy</Link></h1>
        <Route
          component={Home}
          path={'/'}
        />
        <Route
          path="/search/:keyword"
          component={ListOfGifs}
        />
        <Route
          component={SearchResults}
          path={'/gif/:id'}
        />
      </section>
    </div>
  )
}

export default App
