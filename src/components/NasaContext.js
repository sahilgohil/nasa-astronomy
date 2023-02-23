import React from "react";
import { useState,useEffect,createContext } from "react";

const NasaContext = createContext()

function NasaContextProvider(props)
{
    const [nasaData, setNasaData] = useState([])
    const [count,setCount] = useState(9)
    const [loading,setLoading] = useState(false)
    function viewMoreResults()
    {
        setCount(preCount => preCount+6)
        setLoading(true)
    }

    useEffect(()=>{
        fetch(`https://api.nasa.gov/planetary/apod?count=${count}&api_key=SgSoQgtdDi6ptwxZzo9i4upwEgIGQ4TpvGVOFesc`)
        .then(res => res.json())
        .then(data => setNasaData(data.map((item,index)=>({id:index+1,...item}))))
        if(loading)
        {
            setTimeout(()=>{
                setLoading(false)
            },3000)
        }
    },[count])

    return(
        <NasaContext.Provider value={{nasaData,viewMoreResults,loading}}>
            {props.children}
        </NasaContext.Provider>
    )
}

export {NasaContextProvider,NasaContext}