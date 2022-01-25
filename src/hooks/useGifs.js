import {useEffect,useState,useContext} from "react";
import getGifs from "../services/getGifs";
import GifsContext from "../context/GifsContext";

export default function useGifs({keywords} = {keywords:"Goku"}){
  const [loading, setLoading] = useState(false)
  const {gifs,setGif} = useContext(GifsContext)
  
  useEffect(()=> {
    setLoading(true)
    //Recuperamos la keywords del localStorage
    const keywordsToUse = keywords || localStorage.getItem("lastKeyword") || "Goku"
    getGifs({keywords:keywordsToUse}).then(el => {
      setGif(el)
      setLoading(false)
      localStorage.setItem("lastKeyword",keywords)
    })       
  },[keywords,setGif])

  return ({loading,gifs})
}