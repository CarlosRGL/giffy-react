import React, { useState } from 'react'
import { Link, useLocation } from "wouter";

import ListOfGifs from '../components/ListOfGifs'
// Custom Hook
import useGifs from "../hooks/useGifs";


const POPULAR_GIFS = ["Matrix", "Rick", "Morty", "MotoGP"]

export default function Home() {
	const [keyword, setKeyword] = useState('')
	const [path, pushLocation] = useLocation()
	const {loading, gifs} = useGifs()

	const handleSubmit = evt => {
		evt.preventDefault()
		pushLocation(`/search/${keyword}`)
	}

	const handleChange = evt => {
		setKeyword(evt.target.value)
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input onChange={handleChange} type="text" name="search" value={keyword} placeholder="Search a Gif ..."/>
			</form>
			<h2>Last Search</h2>
			<ListOfGifs gifs={gifs} />
			<h2>Popular Gifs</h2>
			<ul>
				{POPULAR_GIFS.map(popularGif =>(
					<li key={popularGif}>
						<Link to={`search/${popularGif}`}>Gifs about {popularGif}</Link>
					</li>
				))}
			</ul>
		</>
	)

}