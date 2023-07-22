import { BrowserRouter , Routes , Route } from "react-router-dom";

import Countries from "./components/countries";
import Notfound from "./components/notfound"
import Single from "./components/single";



function App() {
  return (
    

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Countries/>}></Route>
        <Route path="/:name" element={<Single/>}></Route>
        <Route path="*" element={<Notfound/>}></Route>



      </Routes>



    </BrowserRouter>

    
    
    
  )

}

export default App;
