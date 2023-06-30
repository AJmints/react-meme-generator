import React from "react"
import WindowTracker from "./WindowTracker"

export default function StateEffectExample() {

    function width() {
        return
    }

    return (
        <div className="state-effect">
            <button className="state-effect button" onClick={width}>
                Toggle WindowTracker
            </button>
            <WindowTracker />
        </div>
    )
}