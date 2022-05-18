import { useEffect, useState } from "react"
import api from "../api"

const useFetch = <T>(entryPoints: string): [T | null, boolean | string, boolean | string] => {
    const [data, setData] = useState<T | null>(null)
    const [isLoading, setLoading] = useState<boolean>(false)
    const [isErr, setErr] = useState<string | boolean>(false)

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)
            setErr(false)
            try{
                const res = await api.get(entryPoints)
                if(res.data.status > 400 || res.status > 400){
                    setErr(res.data.message + ` ( ${res.data.status} )`)
                }else{
                    setData(res.data.data)
                }
            }catch(err: any){
                setErr(err.message)
            }
            setLoading(false)
        }
        fetchData()
    }, [entryPoints])

    return [data, isLoading, isErr]
}


export default useFetch