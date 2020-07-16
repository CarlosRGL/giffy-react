import React from 'react'

export default function Gif({title, url }) {
  return (
    <div className="overflow-hidden mb-8 relative">
      <h2 className="font-sans text-lg text-gray-800 absolute bottom-0 bg-white w-full">{title}</h2>
      <img loading="lazy" alt="title" src={url} />
    </div>
  )
}
