import React from 'react'
import Marked from "marked"


export default function Previewer(props) {
    const data =Marked(props.text)
    const renderer={
        image(data){
        console.log(data)        }
    }
    Marked.use(renderer)
    return (
        <div className="bg-secondary" style={{height:"400px",border:"2px solid black",padding:"10px"}} dangerouslySetInnerHTML={{__html:data}}>
            
        </div>
    )
}
