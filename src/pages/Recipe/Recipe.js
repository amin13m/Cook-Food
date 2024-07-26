import { Routes, Route } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../Hooks/usefetch'
import "./Recipe.css"
import { useTheme } from '../../Hooks/useTheme'
import { useState } from 'react'
import { useEffect } from 'react'
import { db } from '../../firebase/config'
import { getDoc , doc} from '@firebase/firestore'


export default function Recipe() {

    const {id} = useParams()
    const {mode} = useTheme()

    const [data,setData] =useState(null)
    const [loading,setLoading] = useState(false)
    const [err,setErr] = useState(false)

    useEffect(()=>{  
        setLoading(true)

        const ref = doc(db , 'recipe' , id)
        getDoc(ref)
          .then((doc)=>{
            if(doc.empty){
                setErr("nothing found !!!")
                setLoading(false)
            }else{
                setData(doc.data())
                setLoading(false)
            }
          })
    }, [])

   
    return (
        <div className={`recipe ${mode}`}>
            {loading && <p>loading</p>}
            {err && <p>{err}</p>}
           
            
 
            {data && <>
                <h1 className='title'>{data.title}</h1>
                <p className='time'>Takes {data.cookingTime} to cook</p>
                
                <ul>
                    {data.ingredients.map( (ing, index)=>(
                        <li key={index}>{ing}</li>
                    ))}
                </ul>
                <p>{data.recipe}</p>
                
                </>}
            
        </div>
    )
}
