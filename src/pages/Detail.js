import React, { useContext } from 'react'
import StaticContext from '../context/StaticContext'

export default function Detail() {
  const context = useContext(StaticContext)
  console.log(context)
  return <h2>test</h2>
}
