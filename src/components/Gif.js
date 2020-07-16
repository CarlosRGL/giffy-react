import React from 'react'

export default function Gif({title, url }) {
  return (
    <div>
      <h2 className="font-sans text-lg text-gray-800">{title}</h2>
      <img alt="title" src={url} />
    </div>
  )
}
