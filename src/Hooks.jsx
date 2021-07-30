import React, { useState } from 'react';
 function Hooks() {
     const [ data, setdata]=useState(0);
     const Change=() =>{ 
         setdata(data+1);
     }
     return (
        <>
        <h1> {data} </h1>
        <button  onClick={Change}> parivartan ke liye dabaye</button>
        </>
     );
}
export default Hooks;