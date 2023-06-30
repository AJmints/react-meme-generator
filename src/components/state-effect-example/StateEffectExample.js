import React from "react"
import WindowTracker from "./WindowTracker"

export default function StateEffectExample() {

    const [show, setShow] = React.useState(true)

    /* State example, when toggle is flipped false, it becomes "unmounted". When true, it becomes "mounted" */
    function toggle() {
        setShow(prevShow => !prevShow)
    }

    return (
        <div className="state-effect">
            <button className="state-effect button" onClick={toggle}>
                Toggle WindowTracker
            </button>
            {show && <WindowTracker />} {/* If we stop displaying WindowTracker, then 
                                        it becomes unmounted and is not rendering. However, useEffect is
                                        still listening for changes and needs to be handled. This is
                                        handling a "side effect" with useEffect. Without handling the 
                                        "side effect" in Window Tracker, we have a memory leak. */}
        </div>
    )
}