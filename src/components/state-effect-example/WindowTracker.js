import React from "react";

export default function WindowTracker() {

    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight)


    /* When WindowTracker is unmounted, our return in useEffect detects that this component is
    no longer being rendered and runs the return statement in useEffect. This cleans up any
    potential memory leaks. Plug-ins are also managed this way. */
    React.useEffect(() => {

        function watchWidthHeight() {
            console.log("setting up...")
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }

        window.addEventListener("resize", watchWidthHeight)
        
        return () => {
            console.log("cleaning up....")
            window.removeEventListener("resize", watchWidthHeight)
        } // This is a clean up function to address the sideEffects from useEffect. In this case
          // we are fixing the memory leak that would be open without this return statement.

    }, [])


    return (
        <>
        <h1 className="state-effect" >Window width: {width}</h1>
        <h1 className="state-effect"> Window height: {height}</h1>
        </>
    )
}