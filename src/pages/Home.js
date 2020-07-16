import React from 'react'
import { Link } from "wouter";

const POPULAR_GIFS = ["Matrix", "Rick", "Morty", "MotoGP"]

export default function Home() {
    return (
        <>
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