import { useState, useEffect} from 'react';


const UseEffectComponent = () =>{
    const [numState, setNumState] = useState(1);

    useEffect(() =>{
        const timer = window.setInterval(()=>{
            //setNumState(numState + 1);            //This will be stuck on 2, because of the scope of numState within the setInterval
            setNumState((x) => x + 1);              //State setters can take in a function - called mutators, don't need to worry about scope, just create function to modify the state
        }, 1000);
        return () => window.clearInterval(timer);   //return in UseEffect acts as a cleanup function - runs when the component is removed.
    }, [])

    return (
        <div>
            {numState}
        </div>
    )
}

export default UseEffectComponent;