import React from 'react'
import "./index.css"
function Bookstore() {
    return (
       <section className="booklist">
           <Book/>
           <Book/>
           <Book/>
           <Book/>
       </section>
    )
}
const Book=()=>{
    return <article>
        <Img/><Title/><Author/>
    </article>
}
const Img=()=><img src="https://m.media-amazon.com/images/I/71gpkRk86eS._AC_UY218_.jpg"
alt=""></img>
const Title=()=> <h1 style={{color:"black",font:"bold",fontSize:"1.5rem",marginTop:"0.25"}}>Think and grow rich</h1>
const Author=()=><h2 style={{color:'#617d98',fontSize:'0.75rem',marginTop:"0.25rem",letterSpacing:"2px"}} >Napolean Hill</h2>

export default Bookstore