import React from "react"

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: null
    })


    /**
     * useEffect takes a function as its parameter. If that function
     * returns something, it needs to be a cleanup function. Otherwise,
     * it should return nothing. If we make it an async function, it 
     * automatically returns a promise instead of a function or nothing.
     * Therefore, if you want to use async operations inside of useEffect,
     * you need to define the function separately inside of the callback 
     * function, as seen below:
     */

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
        // fetch("https://api.imgflip.com/get_memes")
        // .then(res => res.json())
        // .then(data => setAllMemes(data.data.memes))

        // return not needed here since this api call is only happening once.
    }, [])

    const [allMemes, setAllMemes] = React.useState([])

    function getMemeImage() {
        const memesArray = allMemes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => {
            return {...prevMeme,
            randomImage: url
            }
        })
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input" 
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    placeholder="Bottom Text"
                    className="form--input"
                    name="bottomText" 
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image
                </button>
            </div> 
            <br />
            <div className="meme">
                <img 
                    src={meme.randomImage}
                    className="meme--image"
                    alt=""
                />
                <h2 
                    className="meme--text top"

                >{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}