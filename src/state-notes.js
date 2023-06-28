import {useState} from 'react'

/* Ternary example */
/* Ternary example */
/* Ternary example */

const [isGoingOut, setIsGoingOut] = React.useState(true)
// A different way to write a boolean if statement
// The string after the question mark is what will be returned based on the status of the boolean
let answer = isGoingOut ? "Yes" : "No"
// A short hand funciton of changing state related to previous version of state example:
function changeMind() {
    setIsGoingOut(prevState => !prevState)
}
// Call the function "changeMind" to flip between true and false useState


/* Modifying an array with state example */
/* Modifying an array with state example */
/* Modifying an array with state example */

const [thingsArray, setThingsArray] = React.useState(["Thing 1", "Thing 2"])

function addThing() {
    setThingsArray(prevThingsArray => {
    // [...prevThingsArray] this is the array spread opperator, used frequently in React
    return [...prevThingsArray, `Thing ${prevThingsArray.length + 1}`]
})
}

const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)

return (
    <div>
        <button onClick={addThing}>Add Thing</button>
        {thingsElements}
    </div>
)


/* Modifying an object with state */
/* Modifying an object with state */
/* Modifying an object with state */

export default function App() {

    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "(719) 555-1222",
        email: "realemail@email.com",
        isFavorite: false
    })

    let favoriteIcon = contact.isFavorite ? "Add Favorite" : "Remove Favorite"

    function toggleFavorite() {
        setContact(prevContact => {
            // using the array spread opperator brings in the old state and then you can modify it and update
            // parts of the previous state/object by declaing the parts below.
            return {...prevContact,
            isFavorite: !prevContact.isFavorite
            }
        })
    }

    return (
        <main>
            <article className='card'>
                <img src='./images/user.png' className='card--image' />
                <div className='card--info'>
                    <img
                        src={`../images/${favoriteIcon}`}
                        className='card--favorite'
                        onClick={toggleFavorite}
                    />
                </div>
            </article>
        </main>
    )

}