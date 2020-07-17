import React from 'react'
import { Link, Route } from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'

import Context from './context/StaticContext'

function App() {
  return (
    <Context.Provider value={{ name: 'Carlos' }}>
      <div className="App bg-gray-200">
        <section className=" mx-auto flex flex-col">
          <Route component={Home} path={'/'} />
          <Route path="/search/:keyword" component={SearchResults} />
          <Route component={Detail} path={'/gif/:id'} />
        </section>
      </div>
    </Context.Provider>
  )
}

export default App
