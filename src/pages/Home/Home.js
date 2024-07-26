import { Routes, Route } from 'react-router-dom'

import "./Home.css"
import { useFetch} from '../../Hooks/usefetch'
import List from '../../Components/List'

import { useState } from 'react'
import { useEffect } from 'react'

import { collection ,getDocs} from '@firebase/firestore'
import{db} from '../../firebase/config'

export default function Home() {

    const [data,setData] =useState(null)
    const [loading,setLoading] = useState(false)
    const [err,setErr] = useState(false)

    useEffect(()=>{
        setLoading(true)

        const ref = collection(db ,'recipe')
        getDocs(ref)
           .then((snapshot)=>{
              if(snapshot.empty){
                setErr('No recipe found')
                setLoading(false)
              }else{
                let result =[]
                snapshot.docs.forEach((doc)=>{

                    result.push({id:doc.id , ...doc.data()})
                })
                setData(result)
                setLoading(false)
              }
           })
    },[])

    return (
        <div className='home'>
            {err && <p>{err}</p>}
            {loading && <p>loading</p>}
            {data && <List data={data}/>}
        </div>
    )
}
