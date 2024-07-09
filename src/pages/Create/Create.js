import { Routes, Route, useNavigate } from 'react-router-dom'


import { useEffect, useState } from 'react'
import { useFetch } from '../../Hooks/usefetch'
import "./Create.css"

export default function Create() {

    const [title, setTitle]= useState("")
    const [cookingTime, setCookingTime]= useState("")
    const [recipe, setRecipe]= useState("")
    const [newIngredient, setNewIngredient] = useState("")
    const [ingredients, setIngredients] = useState([])
    
    const {postData , data , err } = useFetch('http://localhost:3000/recipes', 'POST')

    const navigate = useNavigate()

    const handleSabmit =(e)=>{
        e.preventDefault()
        
        postData({title, ingredients, cookingTime : cookingTime + 'min' , recipe})
        console.log ("don")
    }

    const handleAdd=(e)=>{
        e.preventDefault()

        if(newIngredient && !ingredients.includes(newIngredient)){
            setIngredients(pre => [...pre , newIngredient])
        }
        setNewIngredient('')
    }

    useEffect(()=>{
        if(data){
            navigate('/')
        }
    },[data])
    
    return(

        <div className='create'>
            <h2>Add a new recipe</h2>
            
            <form onSubmit={handleSabmit}>
                
                <label>
                    <span>Recipe title :</span>
                    <br/>
                    <input
                    type='text'
                    onChange={(e)=>setTitle(e.target.value)}
                    value={title}
                    required
                    />
                </label>
                
                <label>
                    <span>Recipe method :</span>
                    <br/>
                    <textarea
                    onChange={(e)=>setRecipe(e.target.value)}
                    value={recipe}
                    required
                    />
                </label>
                
                <label>
                    <span>Add ingredients :</span>
                    <br/>
                    <div className='ingredients'>
                        <input
                        className='Add'
                        type='text'
                        onChange={(e)=> setNewIngredient(e.target.value)}
                        value={newIngredient}
                        />
                        <button onClick={handleAdd} className='btn'> Add </button>
                        <p className='itms'>Current ingredients : {ingredients.map(e => <em key={e}> {e} , </em>)}</p>
                    </div>
                </label>
                
                <label>
                    <span>Cooking time(m) :</span>
                    <br/>
                    <input
                    type='number'
                    onChange={(e)=>setCookingTime(e.target.value)}
                    value={cookingTime}
                    required
                    />
                </label>

              

                <button className='btn'>submit</button>
            </form>
        </div>
    )
}
