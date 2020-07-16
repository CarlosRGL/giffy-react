import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner'
import getGifs from '../services/getGifs'
import ListOfGifs from '../components/ListOfGifs'


export default function SearchResults({ params }) {
  const {keyword} = params
  const [loading, setLoading] = useState(false)
  const [gifs, setGif] = useState([])

  useEffect(
    function () {
      setLoading(true)
      getGifs({ keyword })
      .then((gifs) => {
        setGif(gifs)
        setLoading(false)
      })
    },
    [keyword]
  )

  return <>
  {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
  </>
}
