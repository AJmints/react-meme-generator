import React from 'react'

export default function ApiUseEffect() {

    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)

    /* useEffect only runs correctly when the observed dependency is set */
    React.useEffect(function() {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count]) // [count] is the observed dependency, [] is also common cause you might just need to make one get call.

    return (
        <div>
            <h2>The count is {count}</h2>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get next Character</button>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        </div>
    )

}