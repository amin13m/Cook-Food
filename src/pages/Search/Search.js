import { Routes, Route, useLocation } from 'react-router-dom'

import "./Search.css"
import { useFetch } from '../../Hooks/usefetch'
import List from '../../Components/List'

export default function Search() {

    const qs = useLocation().search
    const qp = new URLSearchParams(qs)
    const query = qp.get('q')

    const url = `http://localhost:3000/recipes?title=${query}`

    const{err, loading, data } = useFetch(url)
    return (
        <div >
            <h2>Recipe including "{query}"</h2>
            {err && <p>{err}</p>}
            {loading && <p>loading</p>}
            {data && <List data={data}/> }
        </div>
    )
}
