import { useState } from "react"

export default function Reminders(){

const [medicine,setMedicine]=useState("")
const [list,setList]=useState([])

function addMedicine(){

if(medicine==="") return

setList([...list,medicine])
setMedicine("")

}

return(

<div style={{padding:"50px"}}>

<h2 style={{fontSize:"30px"}}>
Medicine Reminders
</h2>

<input
placeholder="Enter medicine name"
value={medicine}
onChange={(e)=>setMedicine(e.target.value)}
style={{
padding:"10px",
marginTop:"20px",
marginRight:"10px"
}}
/>

<button
onClick={addMedicine}
style={{
padding:"10px 20px",
background:"#C7F0DB",
border:"none",
borderRadius:"8px",
cursor:"pointer"
}}
>
Add Reminder
</button>

<div style={{marginTop:"30px"}}>

{list.map((item,index)=>

<div key={index} style={{
background:"#ffffff",
padding:"15px",
marginBottom:"10px",
borderRadius:"10px",
boxShadow:"0 2px 8px rgba(0,0,0,0.05)"
}}>

💊 {item}

</div>

)}

</div>

</div>

)

}