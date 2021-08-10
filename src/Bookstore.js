import React from 'react'
import "./index.css"
const FirstBook={
 title:"Think and grow Rich",
author:"Napolean Hill",
 img:"https://m.media-amazon.com/images/I/71gpkRk86eS._AC_UY218_.jpg"
}
const SecondBook={
    title:"As a Man thinketh",
   author:"James Allen",
    img:"https://m.media-amazon.com/images/I/81tEgsxpNZS._AC_UY218_.jpg"
   }
   const ThirdBook={
    title:"Harry Potter",
   author:"JK Rowling",
    img:"https://m.media-amazon.com/images/I/81YOuOGFCJL._AC_UL320_.jpg"
   }
function Bookstore() {
    return (
       <section className="booklist">
           <Book img={FirstBook.img} title={FirstBook.title} author={FirstBook.author}/>
           <Book img={SecondBook.img} title={SecondBook.title} author={SecondBook.author}/>
           <Book img={ThirdBook.img} title={ThirdBook.title} author={ThirdBook.author}/>
           
       </section>
    )
}
// const Book=()=>{
//     return <article>
//         <Img/><Title/><Author/>
//     </article>
// }
const Book=(props)=>{
    return <article className="book">
        <img src={props.img}></img>
        <h1>{props.title}</h1>
        <h2>{props.author}</h2>
    </article>
}
// const Img=()=><img src={img} alt=""></img>
// const Title=()=> <h1 style={{color:"black",font:"bold",fontSize:"1.5rem",marginTop:"0.25"}}>{title}</h1>
// const Author=()=><h2 style={{color:'#617d98',fontSize:'0.75rem',marginTop:"0.25rem",letterSpacing:"2px"}} >{author}</h2>

export default Bookstore