import React from 'react'
import Spinner from '../components/Spinner'
import ListOfGifs from '../components/ListOfGifs'
// Custom Hook
import useGifs from "../hooks/useGifs";


export default function SearchResults({ params }) {
  const {keyword} = params
  const {loading, gifs} = useGifs({keyword})

  return (
    <>
      {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
    </>
  )
}
