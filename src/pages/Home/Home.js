import { Routes, Route } from 'react-router-dom'

import "./Home.css"
import { useFetch } from '../../Hooks/usefetch'
import List from '../../Components/List'

export default function Home() {

    const {data , loading , err} = useFetch("http://localhost:3000/recipes")

    return (
        <div className='home'>
            {err && <p>{err}</p>}
            {loading && <p>{loading}</p>}
            {data && <List data={data}/>}
        </div>
    )
}
