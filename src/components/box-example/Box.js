import React from "react"

export default function Box(props) {

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent"
    }

    return (
    <div 
        style={styles} 
        className="box" 
        // onClick={() => props.toggle(props.id)} //Move this to the front for "closure"
        onClick={props.toggle}
    >
    </div>
    )
}