import React from 'react'

export default function Gif({title, url }) {
  return (
    <div className="w-1/2 overflow-hidden sm:my-3 sm:px-3">
      <h2 className="font-sans text-lg text-gray-800">{title}</h2>
      <img alt="title" src={url} />
    </div>
  )
}
