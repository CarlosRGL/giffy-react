import React from 'react'
import Gif from './Gif'

export default function ListOfGifs({ gifs }) {
  return (
    <div className="masonry px-16 py-8">
      {
        gifs.map(({ id, title, url }) => (
          <Gif id={id} key={id} title={title} url={url} />
        ))
      }
    </div>
  )
}
