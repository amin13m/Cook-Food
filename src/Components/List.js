import { Link, link } from 'react-router-dom'
import { useFetch } from '../Hooks/usefetch'
import "./List.css"


import React, { useState } from 'react'
import Recipe from '../pages/Recipe/Recipe'

export default function List({data}) {

  
   
    return (
        <div className='list'>
            {data.map(r=>(
              <div key={r.id} className='card'>
                <h2>{r.title}</h2>
                <p>{r.cookingTime} to make</p>
                <div>{r.recipe.substring(0,60)} ...
                </div>
                <Link to={`/recipe/${r.id}`}>recipe</Link>
              </div>
            ))}
        </div>
    )
}







