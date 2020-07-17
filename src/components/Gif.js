import React from 'react'
import { useProgressiveImage } from '../hooks/lazyBackground'

export default function Gif({ title, url, id }) {
  const loaded = useProgressiveImage(url)
  return (
    <div className="overflow-hidden">
      <div
        className="image w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${loaded || ''})` }}
      ></div>
      <h2 className="font-sans text-lg text-gray-800 bg-white w-full">
        <a href={`/gif/${id}`}>{title}</a>
      </h2>
    </div>
  )
}
