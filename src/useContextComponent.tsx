import {useContext, useState} from 'react';
import ContextExample, { ContextExampleType } from './ContextExample';  //also importing the type so it can be stored as a state

const UseContextComponent = () => {
    const [user, setUser] = useState<ContextExampleType>({
        first: "John",
        last: "Doe"
    });

    return(
        <ContextExample.Provider value={user}>
            <UseContextChildConsumerComponent />
            <button onClick={() => {
                setUser({
                    first:"Abe",
                    last: "Lincoln"
                })
            }}>Change Name</button>
        </ContextExample.Provider>

    )
}

const UseContextChildConsumerComponent = () =>{
    const user = useContext<ContextExampleType>(ContextExample);

    return(
        <div>
            <div>First: {user.first}</div>
            <div>Last: {user.last}</div>
        </div>
    )
}

export default UseContextComponent