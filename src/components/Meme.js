import React, {useState} from "react"
import memesData from "../data/memesData"

export default function Meme() {

    let url;

    const [result, setResult] = React.useState(null)
    
 

    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        url = memesArray[randomNumber].url
        return setResult(url)
    }

    return (
        <main>
            <p>{result}</p>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input" 
                />
                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input" 
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div>
        </main>
    )
}