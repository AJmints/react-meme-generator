import React from "react"
import memesData from "../data/memesData"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: null
    })

    const [result, setResult] = React.useState(memesData)
    
    function getMemeImage() {
        const memesArray = result.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => {
            return {...prevMeme,
            randomImage: url
            }
        })
    }

    return (
        <>
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
            <div>
                <img 
                    src={meme.randomImage}
                    className="meme--image"
                    alt=""
                />
            </div>
            </>
    )
}