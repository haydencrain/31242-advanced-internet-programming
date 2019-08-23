import React, { useState, useEffect } from 'react';

export default function Example(props) {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const width = useWindowWidth();

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);  // only re-run the effect if count changes

    function handleCountClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <p>{width}</p>
            <p>You clicked {count} times</p>
            <button onClick={handleCountClick}>
                Click me
            </button>
        </div>
    );
}

function useWindowWidth() {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        // Specify how to clean up after this effect:
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, []); // never re-run the effect

    return width;
}