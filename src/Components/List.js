import { Link, link } from 'react-router-dom'
import { useFetch } from '../Hooks/usefetch'
import "./List.css"
import deleteIcon from '../assets/delete.svg'

import React, { useState } from 'react'
import Recipe from '../pages/Recipe/Recipe'
import { useTheme } from '../Hooks/useTheme'
import { async } from 'q'

import { deleteDoc , doc} from '@firebase/firestore'
import { db } from '../firebase/config'

export default function List({data}) {

  const {mode} = useTheme()

  const handleClick =async(id)=>{
    try{const ref = doc(db , "recipe" , id)
    await deleteDoc(ref)

    }catch(err){

    }
  }

    return (
        <div className='list'>
            {data.map(r=>(
              <div key={r.id} className={`card ${mode}`}>
                <h2>{r.title}</h2>
                <p>{r.cookingTime} to make</p>
                <div>{r.recipe.substring(0,60)} ...
                </div>
                <Link to={`/recipe/${r.id}`}>recipe</Link>
                <img
                  src={deleteIcon}
                  className={`delete ${mode}`}
                  onClick={()=>handleClick(r.id)}
                  style={{filter : 'light'===mode? 'invert(100%)':'invert(20%)'}}
                />
              </div>
            ))}
        </div>
    )
}







