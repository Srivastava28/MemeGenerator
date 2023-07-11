import React from "react";
import memesdata from "./memesdata";

import "./styles.css"

export default function Meme()
{
//    const [memeImage,setMemeImage] = React.useState("")
const [meme,setMeme] = React.useState({
    topText:"",
    bottomText:"",
    randomImage:"https://picsum.photos/id/237/200/300"
})

const [allMemeImages,setAllMemeImages] = React.useState(memesdata)

    function getMemeImg(){
       const memesarray = allMemeImages.data.memes
       const randomNumber = Math.floor(Math.random() * memesarray.length)
       const url= memesarray[randomNumber].url
        setMeme(prevState => {
            return{
                ...prevState, randomImage: url
            }
        })

        
    }

    function handleChange(event)
    {
        const {name,value} = event.target
        setMeme(prevState =>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    return(
     <main>
        
        <div className="form">
            <input 
            type="text"
            className="form--input"
            placeholder="Top Text"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
            >
            </input>

            <input 
            type="text"
            className="form--input"
            placeholder="Bottom text"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
            >
            </input>

            <button
            className="form--button"
            onClick={getMemeImg}
            >Get a new meme image 🖼 </button>
        </div>
        <div className="meme">
        <img src={meme.randomImage} className="meme-image"/>
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>

        </div>
     </main>
    )
}