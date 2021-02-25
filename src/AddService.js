import App from "./App";
import React, { useEffect, useState } from 'react';

function AddService (props){
    const [url ,setUrl]= useState("");
    const [title, setTitle]= useState("");
    const UrlChage=(e)=>{
         setUrl(e.target.value);
    }
    const titleChage=(e)=>{
        setTitle(e.target.value);
   }
   const addItem =()=>{
       return fetch("http://localhost:9999/add",{
           method: "POST",
           body: JSON.stringify({url, title}),
           headers:{
               "content-type":"application/json"
           }
       }).then((r)=>r.json())
       .then((resp)=>{
           console.log(resp)
           return resp;
       })
       .catch=(err)=>{
           console.log(err);
       }

       
   }

    return(
     <div className="container">
         <input placeholder="Add Title" type="text" onChange={UrlChage}></input>
         <input placeholder="Image url" type="text" onChange={titleChage}></input>
         <button style={{width:"100px"}} onClick={addItem}>Add</button>
     </div>
 )
}
export default AddService;