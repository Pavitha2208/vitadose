export default function Home(){

return(

<div>

{/* Hero Section */}

<div style={{
display:"flex",
flexDirection:"column",
alignItems:"center",
justifyContent:"center",
height:"70vh",
background:"linear-gradient(135deg,#B7D7F9,#F8C8DC)"
}}>

<h1 style={{
fontSize:"50px",
color:"#2E3A46"
}}>
VitaDose
</h1>

<p style={{
maxWidth:"500px",
textAlign:"center",
marginTop:"20px",
fontSize:"18px"
}}>
Your smart medicine reminder and safety assistant.
Track medicines, check interactions and stay healthy.
</p>

<button style={{
marginTop:"30px",
padding:"14px 32px",
borderRadius:"10px",
border:"none",
background:"#ffffff",
cursor:"pointer"
}}>
Get Started
</button>

</div>

{/* Feature Section */}

<div style={{
padding:"60px",
textAlign:"center"
}}>

<h2 style={{fontSize:"30px"}}>
Features
</h2>

<div style={{
display:"grid",
gridTemplateColumns:"repeat(3,1fr)",
gap:"30px",
marginTop:"40px"
}}>

<div style={{
background:"#fff",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 2px 10px rgba(0,0,0,0.05)"
}}>

<h3>💊 Medicine Reminders</h3>
<p>Never miss your daily medicines.</p>

</div>

<div style={{
background:"#fff",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 2px 10px rgba(0,0,0,0.05)"
}}>

<h3>⚠ Drug Interaction Checker</h3>
<p>Check if medicines are safe to take together.</p>

</div>

<div style={{
background:"#fff",
padding:"30px",
borderRadius:"12px",
boxShadow:"0 2px 10px rgba(0,0,0,0.05)"
}}>

<h3>📚 Medicine Library</h3>
<p>Search and learn about common medicines.</p>

</div>

</div>

</div>

</div>

)

}