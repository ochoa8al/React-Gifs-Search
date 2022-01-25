import React, { useState } from "react";
import { useLocation } from "wouter";
import useGifs from "../../hooks/useGifs";
import Spinner from '../../components/Spinner'
import ListOfGifs from '../../components/ListOfGifs'

/* const POPULAR_GIFS = ['Canada','Holanda','USA','Chef','Programming'] */

export default function Home(){
  const [keywords, setKeyword] = useState("")
  const [path, pushLocation] = useLocation()
  const {loading,gifs} = useGifs()

  const handleSubmit = evt => {
    evt.defaultPrevent = true   
    pushLocation(`/search/${keywords}`)
  }

  const handleChange = evt => setKeyword(evt.target.value)  

  return (<div className="HomePage">
    <form onSubmit={handleSubmit}>
      <input placeholder="Search gifs..." onChange={handleChange} value={keywords} type="text"/>
    </form>
    <h3>Gifs más buscados</h3>     
     
    {    
      loading 
      ? <Spinner />
      : <ListOfGifs gifs={gifs}/>
    }      
   
  </div>)
}
