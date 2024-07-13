import { Routes, Route } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../Hooks/usefetch'
import "./Recipe.css"
import { useTheme } from '../../Hooks/useTheme'


export default function Recipe() {

    const {id} = useParams()
    const url = "http://localhost:3000/recipes/" + id
    const {data , loading , err} = useFetch(url)

    const {mode} = useTheme()
   
    return (
        <div className={`recipe ${mode}`}>
            {loading && <p>loading</p>}
            {err && <p>err</p>}
           
            
 
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
