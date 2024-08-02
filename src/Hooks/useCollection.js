
import { useEffect } from "react"
import { useState } from "react"

import { collection, onSnapshot } from "@firebase/firestore"
import { db } from "../firebase/config"


export default function useCollection(c) {

    const [data,setData] =useState(null)
    const [loading,setLoading] = useState(false)
    const [err,setErr] = useState(false)

    useEffect(()=>{
        setLoading(true)
        
        const ref = collection(db,c)

        const unsub = onSnapshot(ref , (snapshot)=>{
            if(snapshot.empty){
                setErr("there is no data")
                setLoading(false)
            }else{
                let result =[]

                snapshot.docs.forEach((doc)=>{
                    result.push({id:doc.id, ...doc.data()})
                })

                setData(result)
                setLoading(false)
            }

        })    
        
        return ()=> unsub()
    },[c])

    return {data , loading , err}

}
