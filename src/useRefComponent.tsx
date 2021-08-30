import {useRef, useEffect} from 'react'

const useRefComponent = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(()=>{
        inputRef.current?.focus();
    })
        
    return (
        <input ref={inputRef}/>
    )
}

export default useRefComponent