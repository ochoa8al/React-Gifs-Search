const APIKEY = "WcEkizg1Jttmhl58J58FZcrCoY60BP2l"

export default function getGifs({keywords}={}){
  const APIURL = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&q=${keywords}&limit=12&offset=0&rating=g&lang=en`

  return fetch(APIURL)
    .then((resp)=> resp.json())
    .then((response)=> {
      const {data} = response
      
      const gifs = data.map(el => {
        const {id,title,images} = el
        const {url} = images.downsized_medium
        return {id,title,url}
      })
    return gifs
    })
}
