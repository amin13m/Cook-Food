import { Routes, Route } from 'react-router-dom'

import "./Home.css"
import { useFetch} from '../../Hooks/usefetch'
import List from '../../Components/List'

import { useState } from 'react'
import { useEffect } from 'react'

import { collection ,getDocs} from '@firebase/firestore'
import{db} from '../../firebase/config'
import useCollection from '../../Hooks/useCollection'

export default function Home() {

 
    const {data , loading , err } = useCollection("recipe")

    return (
        <div className='home'>
            {err && <p>{err}</p>}
            {loading && <p>loading...</p>}
            {data && <List data={data}/>}
        </div>
    )
}
