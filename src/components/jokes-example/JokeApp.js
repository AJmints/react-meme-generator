import React from "react"
import Joke from "../jokes-example/Joke"
import jokesData from "../jokes-example/data/jokesData"

export default function App() {

    /* Replace empty array with [1] or ["a", "b"] for other conditinal example */ 
    const [messages, setMessages] = React.useState([1, 2])

    const jokeElements = jokesData.map(joke => {
        return (
            <Joke 
                key={joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })


    return (
        <main>
            <div>
                {jokeElements}
            </div>
            <br />
            <div>
                <hr />
                <p>Different conditional example</p>
                {
                    messages.length === 0 ?
                    <h1>You are all caught up!</h1> :
                    <h1>You have {messages.length} unread 
                    {messages.length > 1 ? " messages" : " message"}</h1>
                }
            </div>
        </main>
    )
}
