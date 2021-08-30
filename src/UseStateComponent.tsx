import { useState} from 'react';


const UseStateComponent = () =>{
    const [array, setArray] = useState<number[]>([]);//an empty array has the type 'never', need to explitily define the type of empty arrays, in this case with <number[]>

    return (
        <div>
            <button onClick={() => {setArray([...array, array.length + 1])}}>Add to array</button>
            {JSON.stringify(array)}
        </div>
    )
}

export default UseStateComponent;