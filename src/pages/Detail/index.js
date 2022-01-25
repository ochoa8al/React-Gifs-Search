import React,{useContext} from "react";
import GifsContext from "../../context/GifsContext";

export default function Deatil({params}){

  const {gifs} = useContext(GifsContext)

  console.log({gifs});
  
  
  return <h3>Gif ID: {params.id}</h3> 
}