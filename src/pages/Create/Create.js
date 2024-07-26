import { Routes, Route, useNavigate } from 'react-router-dom'


import { useEffect, useState } from 'react'
import { useFetch } from '../../Hooks/usefetch'
import "./Create.css"
import { useTheme } from '../../Hooks/useTheme'
import { async } from 'q'
import { addDoc, collection } from '@firebase/firestore'
import { db } from '../../firebase/config'

export default function Create() {

    const [title, setTitle]= useState("")
    const [cookingTime, setCookingTime]= useState("")
    const [recipe, setRecipe]= useState("")
    const [newIngredient, setNewIngredient] = useState("")
    const [ingredients, setIngredients] = useState([])
    
   

    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault()
        
        const data= {title, ingredients, cookingTime : cookingTime + 'min' , recipe}
        try{      
            const ref =collection(db , 'recipe')
            await addDoc(ref , data)
            navigate('/')
        }catch(err){
             console.log(err)
            }
        


    }

    const handleAdd=(e)=>{
        e.preventDefault()

        if(newIngredient && !ingredients.includes(newIngredient)){
            setIngredients(pre => [...pre , newIngredient])
        }
        setNewIngredient('')
    }

 
    const {mode}= useTheme()
    
    return(

        <div className={`create ${mode}`}>
            <h2>Add a new recipe</h2>
            
            <form onSubmit={handleSubmit}>
                
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
