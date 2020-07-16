import React from 'react'

export default function Gif({ id, title, url }) {
  return (
    <div>
      <h4>{title}</h4>
      <img alt="gif" src={url} />
    </div>
  )
}