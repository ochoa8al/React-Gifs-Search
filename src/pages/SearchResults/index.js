import React from "react";
import ListOfGifs from "../../components/ListOfGifs";
import Spinner from '../../components/Spinner'
import useGifs from "../../hooks/useGifs";

export default function SearchResults({params})
{
  const {keywords} = params
  const {loading,gifs} = useGifs({keywords})
    
  return <>
    {
      loading 
      ? <Spinner />
      : <ListOfGifs gifs={gifs}/>
    }
  </>
  
}