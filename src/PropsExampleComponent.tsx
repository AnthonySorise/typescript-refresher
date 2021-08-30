import react from 'react'

export interface examplePropsInterface {
    text: string;
}
const PropsExampleComponent = ({text}:examplePropsInterface) =>{
    return (
        <h5>{text}</h5>
    )
}

export default PropsExampleComponent