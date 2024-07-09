import React, { useEffect, useState } from 'react'
import "./search.css"
import { Navigate, useNavigate } from 'react-router-dom'

export default function Search() {

    const [term, setTerm] =useState('')
    const Navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault()

        Navigate(`/search?q=${term}`)
    }

    return (
       
            <form onSubmit={handleSubmit} className='searchbar'>
                <label htmlFor='search'>search :</label>
                <input
                onChange={(e)=> setTerm(e.target.value)}
                id='search'
                type='text'
                required
                />
            </form>
       
    )
}
