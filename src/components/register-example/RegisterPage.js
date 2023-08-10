import React from "react"

export default function Register() {

    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsLetter: true
    })

    const url = "http://localhost:8080"
    const options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        },
        body: JSON.stringify(formData),
    };

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => ({
            ...prevFormData, 
            [name]: type === "checkbox" ? checked : value
        }))
    }
    
    function handleSubmit(event) {
        event.preventDefault() // This is required to prevent page refresh after submit

        if (formData.password === formData.passwordConfirm && formData.password.length > 0) {
            fetch(url + "/user/signup", options)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            })

        } else {
            console.log("Please enter matching passwords")
            return
        }

        if (formData.joinedNewsLetter) {
            console.log("Thank you for signing up to our news letter!")
        }
    }



    
    return (
        <div className="body-sign">
        <div className="form-container-sign">
            <p>Must set up the backend for this example to work</p>
            <form className="form-sign" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input-sign"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input-sign"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input-sign"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                />
                
                <div className="form--marketing-sign">
                    <input
                        id="okayToEmail"
                        type="checkbox"
                        name="joinedNewsLetter"
                        onChange={handleChange}
                        checked={formData.joinedNewsLetter}
                    />
                    <label htmlFor="okayToEmail">I want to join the newsletter</label>
                </div>
                <button 
                    className="form--submit-sign"
                >
                    Sign up
                </button>
            </form>
        </div>
        </div>
    )
}
