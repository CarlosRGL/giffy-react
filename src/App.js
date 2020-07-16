import React from 'react'
import { Link, Route } from "wouter";
import  Home from "./pages/Home";
import  SearchResults  from "./pages/SearchResults";
import Detail from './pages/Detail'

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
          component={SearchResults}
        />
        <Route
          component={Detail}
          path={'/gif/:id'}
        />
      </section>
    </div>
  )
}

export default App