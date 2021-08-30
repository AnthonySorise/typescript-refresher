import {useState, useEffect, useMemo} from 'react'

export interface dataInterface {
    firstName: string;
    years: number;
}

function useFetchData(url:string) : {data:dataInterface[] | null; done:boolean;}{ // to make generic: function useFetchData<Payload>(url:string) : {data:<Payload> | null; done:boolean;}{
    const [data, setData] = useState<dataInterface[] | null>(null)
    const [done, setDone] = useState(false)

    useEffect(() =>{
        fetch(url)
            .then(resp => resp.json())
            .then((d:dataInterface[]) =>{
                setData(d);
                setDone(true);
            })
    }, [url]);

    return {
        data,
        done,
    }
}

const CustomHookComponent = () => {
    const { data, done } = useFetchData("/json.json")   //if using a generic function, determine type here:  const { data, done } = useFetchData<dataInterface[]>("/json.json") 
    const fiteredData = useMemo( ()=>   //use memo example - value updates when its dependcy (data) updates
        (data || []).filter((x) => x.years == 20)
    , [data]);
    
    return (
        <div>
            {
                done && (
                    <div>
                        <p>{data![0].firstName} <span>: </span>{data![0].years}</p>
                    </div>
                )
            }
        </div>
    )
}

export default CustomHookComponent;