import {BrowserRouter,Routes,Route} from "react-router-dom"

import Navbar from "./components/Navbar"

import Home from "./pages/Home"
import Safety from "./pages/Safety"
import Reminders from "./pages/Reminders"
import Library from "./pages/Library"

function App(){

return(

<BrowserRouter>

<Navbar/>

<Routes>

<Route path="/" element={<Home/>}/>
<Route path="/safety" element={<Safety/>}/>
<Route path="/reminders" element={<Reminders/>}/>
<Route path="/library" element={<Library/>}/>

</Routes>

</BrowserRouter>

)

}

export default App