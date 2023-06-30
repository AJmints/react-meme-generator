import React from "react";

export default function Form() {

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        comments: "",
        isFriendly: true,
        employment: "",
        favColor: ""
    })

    /* StrictMode turned off at index.js so I don't get duplicate console.log */
    // console.log(formData)

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        /* event.preventDefault is requried when submitting a form. This will allow the code to run
        the way we want. Without .preventDefault, the form would be displayed in the url, and the 
        page would be refreshed. */
        event.preventDefault()
        
        //submitToApi(formData) // This is where we would run the function that submits the form to the API
        console.log(formData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <br /><br />
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input 
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input 
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            <textarea 
                placeholder="comment"
                onChange={handleChange}
                name="comments"
                value={formData.comments} 
            />
            <input 
                type="checkbox" 
                id="isFriendly"
                name="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />

            <fieldset>
                <legend>Current employment status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-Time</label>
                <br />
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-Time</label>
                <br />
                </fieldset>
                <br />

                <label htmlFor="favColor">What is your favorite color?</label>
                <br />
                <select
                    id="favColor"
                    value={formData.favColor}
                    onChange={handleChange}
                    name="favColor"
                >
                    <option value="">--Choose--</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>

                </select>
                <br /><br />
            {/* <input type="submit" value="submit" /> has been replaced in React with button 
            being default type="submit" while the button is within the form */}
            {/* By default, <button type="submit">, if you need to use another button, you will 
            need to change the type to "button" */}
            <button>Submit</button>
            
        </form>
    )
}