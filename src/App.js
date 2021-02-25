import React, { useEffect, useState } from 'react';
import './App.css';
import AddService from './AddService'
function App() {
  const [data, setData]= useState([]);
  const [flag, setFlag] = useState(false);
  
const getData=()=>{
  
  fetch('data.json',{
    headers:{
      'Content-type':'application-json'
    }
  })
  .then(function(res){
    return res.json();
  })
  .then(function(data1){
     setData(data1);
  })

}
useEffect(()=>{
  getData();
})
const Add = ()=>{
   setFlag(true);
}
return( flag?(<AddService />):(
  <div className="App">
    <h2>OUR SERVICES</h2>
  <div className="app">
   { data.map((item)=>(
      <div><img style={{height: "100px", width:"300px"}}src={item.url}></img>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      
      </div>
      
    ))
   }
   <button onClick={Add}>Add Service</button>
  </div>
  </div>)
)

}

export default App;
