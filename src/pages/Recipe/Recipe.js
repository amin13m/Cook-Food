import { Routes, Route } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../Hooks/usefetch'
import "./Recipe.css"
import { useTheme } from '../../Hooks/useTheme'
import { useState } from 'react'
import { useEffect } from 'react'
import starIcon from '../../assets/star.svg'
import { async } from 'q'

import { db } from '../../firebase/config'
import { doc, updateDoc, onSnapshot} from '@firebase/firestore'



export default function Recipe() {

    const {id} = useParams()
    const {mode} = useTheme()

    const [data,setData] =useState(null)
    const [loading,setLoading] = useState(false)
    const [err,setErr] = useState(false)

    useEffect(()=>{  
        setLoading(true)

        const ref = doc(db , 'recipe' , id)

        const unsub = onSnapshot(ref, (snapshot)=>{
                if(snapshot.empty){
                    setErr("nothing found !!!")
                    setLoading(false)
                }else{
                    setData(snapshot.data())
                    setLoading(false)
                }
            

            return()=> unsub()
        })
    }, [id])


    const handleClick=async()=>{
        try{
            const ref = doc(db , "recipe" , id)
            await updateDoc(ref , {
                mark : data.mark===false? true : false
            })
        }catch(err){
            console.log(err)
        }
    }
   
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
                
                <img
                  className='star'
                  src={starIcon}
                  style={{filter : true===data.mark? 'invert(80%)':'invert(60%)' ,
                  background:"blue"
                  }}
                  onClick={()=>handleClick()}
                />
            </>}

            
  
            
            
        </div>
    )
}
