import { useState } from "react"

export default function Library(){

const [search,setSearch] = useState("")

const medicines = [
"Paracetamol",
"Ibuprofen",
"Amoxicillin",
"Aspirin",
"Cetirizine"
]

const filtered = medicines.filter(m =>
m.toLowerCase().includes(search.toLowerCase())
)

return(

<div style={{padding:"60px"}}>

<h1 style={{color:"#6DA9E4"}}>
Medicine Library
</h1>

<input
placeholder="Search medicine..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
style={{
padding:"10px",
marginTop:"20px",
borderRadius:"6px",
border:"1px solid #ccc"
}}
/>

<div style={{
marginTop:"30px",
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"20px"
}}>

{filtered.map((med,index)=>(

<div key={index} style={{
background:"#ffffff",
padding:"20px",
borderRadius:"10px",
boxShadow:"0 2px 10px rgba(0,0,0,0.05)"
}}>

<h3>{med}</h3>
<p>Common medicine information.</p>

</div>

))}

</div>

</div>

)

}