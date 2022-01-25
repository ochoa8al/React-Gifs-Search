import React from "react"
import { Link } from "wouter"

export default function Gif({id,title,url}){
    
  return <div className="imgContainer"> 
    <Link to= {`/gif/${id}`}>
      <img className = "imgGif" src={url} alt={title} loading="lazy"/> 
      <h4>{title}</h4>
      <div className="imgTitle">{title}</div>    
    </Link>   
    
  </div>           
      
}