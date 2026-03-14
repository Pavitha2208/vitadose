import { useState } from "react"

export default function Safety(){

const [med1,setMed1] = useState("")
const [med2,setMed2] = useState("")
const [result,setResult] = useState("")

function checkInteraction(){

if(med1.toLowerCase()==="ibuprofen" && med2.toLowerCase()==="aspirin"){

setResult("⚠ These medicines together may increase bleeding risk.")

}
else{

setResult("✅ No major interaction found.")

}

}

return(

<div style={{padding:"60px"}}>

<h1 style={{color:"#6DA9E4"}}>
Medicine Safety Checker
</h1>

<p style={{marginTop:"10px"}}>
Enter two medicines to check interaction
</p>

<div style={{marginTop:"30px"}}>

<input
placeholder="Medicine 1"
value={med1}
onChange={(e)=>setMed1(e.target.value)}
style={{
padding:"10px",
marginRight:"10px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

<input
placeholder="Medicine 2"
value={med2}
onChange={(e)=>setMed2(e.target.value)}
style={{
padding:"10px",
marginRight:"10px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

<button
onClick={checkInteraction}
style={{
padding:"10px 20px",
background:"#B7D7F9",
border:"none",
borderRadius:"8px",
cursor:"pointer"
}}
>
Check
</button>

</div>

<h3 style={{marginTop:"30px"}}>
{result}
</h3>

</div>

)

}