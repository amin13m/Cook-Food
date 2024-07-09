import { useEffect } from "react";
import { useState } from "react";

export  const useFetch =(url , method = 'GET')=>{

    const [data,setdata]= useState(null)
    const [loading, setLoading] = useState(false)
    const [err,setErr] = useState(null)
    const [options , setOptions] = useState(null)

    const postData =(postData)=>{
      setOptions({
        method: "POST",
        header: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postData)
      })
    }

    useEffect(()=>{
         const fetchData =async(fetchOptions)=>{
            setLoading(true)
           

            try {
                
                const response = await fetch(url , {...fetchOptions})
                  if(!response.ok){
                    throw new Error(response.statusText)
                  }
                const json = await response.json()
    
                  setLoading(false)
                  setdata(json)
               
                  
                setErr(null)
   
            } catch (err) {
                
                setLoading(false)

                setErr(err.message)
                
            }
        }

        if(method === "GET"){
          fetchData()
        }
        if(method === "POST" && options){
          fetchData(options)
        }
        
    },[url , method, options])
    {}

    return { postData, data , loading , err }

}










