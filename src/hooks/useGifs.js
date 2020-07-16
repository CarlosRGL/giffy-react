import {useEffect, useState} from 'react'
import getGifs from "../services/getGifs";

export default function useGifs ({keyword}) {
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

  return {loading, gifs}
}