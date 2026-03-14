import { Link } from "react-router-dom"

export default function Navbar(){

return(

<nav style={

{
display:"flex",
justifyContent:"space-between",
alignItems:"center",
padding:"15px 50px",
background:"#FFFFFF",
boxShadow:"0 4px 10px rgba(0,0,0,0.05)"
}

}>

<h2 style={{
color:"#6DA9E4",
fontSize:"22px"
}}>
VitaDose
</h2>

<div>

<Link to="/" style={{margin:"15px"}}>Home</Link>
<Link to="/safety" style={{margin:"15px"}}>Safety Checker</Link>
<Link to="/reminders" style={{margin:"15px"}}>Reminders</Link>
<Link to="/library" style={{margin:"15px"}}>Medicine Library</Link>

</div>

</nav>

)

}