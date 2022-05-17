import { useEffect, useState } from "react"
import api from "../api"

export interface IState{
    data: {
        asma: { 
            ar: { short: string, long: string} 
            en: { short: string, long: string} 
            id: { short: string, long: string}
            translation: { en: string, id: string}
        }
        ayahCount: number
        ayahs: { 
            audio: {url: string}, 
            hizbQuarter: number, 
            juz: number, 
            manzil: number, 
            number: {inquran: number, insurah: number}, 
            page: number,
            ruku: number, 
            sajda: {recommended: boolean, obligatory: boolean},
            tafsir: {id: string, en: string | null},
            text: {ar: string, read: string},
            translation: {en: string, id: string}
        }[]
        number: number
        preBismillah: {text: string, translation: string}
        recitation: {full: string}
        squence: number
        tafsir: {id: string, en: null | string}
        type: {ar: string, id: string, en: string}
    }
}
const useFetch = (entryPoints: string): [IState['data'] | null, boolean | string, null | string] => {
    const [data, setData] = useState<IState['data'] | null>(null)
    const [isLoading, setLoading] = useState<boolean>(false)
    const [isErr, setErr] = useState<null | string>(null)

    useEffect(()=>{
        const fetchData = async () => {
            setLoading(true)
            try{
                const {data} = await api.get(entryPoints)
                setData(data.data)
            }catch(err: any){
                setErr("ERROR")
            }
            setLoading(false)
        }
        fetchData()
    }, [entryPoints])

    return [data, isLoading, isErr]
}


export default useFetch