import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import HomeTwo from './Components/HomeTwo';
import HomeThree from './Components/HomeThree';
import HomeFour from './Components/HomeFour';
import HomeFive from './Components/HomeFive';
import HomeSix from './Components/HomeSix';
import Blog from './Components/Blog';
import Single from './Components/Single';
import Contact from './Components/Contact';
import ErrorPage from './Components/ErrorPage';
import SingleTwo from './Components/SingleTwo';




function App() {

  return (
    <>
      <BrowserRouter>
       <Routes>
        <Route path = "/" element={<Home/>} ></Route>
        <Route path = "/HomeTwo" element={<HomeTwo/>} ></Route>
        <Route path = "/HomeThree" element={<HomeThree/>} ></Route>
        <Route path = "/HomeFour" element={<HomeFour/>} ></Route>
        <Route path = "/HomeFive" element={<HomeFive/>} ></Route>
        <Route path = "/Blog" element={<Blog/>} ></Route>
        <Route path = "/Contact" element={<Contact/>} ></Route>
        <Route path = "/ErrorPage" element={<ErrorPage/>} ></Route>
        <Route path = "/Single" element={<Single/>} ></Route>
        <Route path = "/SingleTwo" element={<SingleTwo/>} ></Route>
        <Route path = "/HomeSix" element={<HomeSix/>} ></Route>

        
        
       
       </Routes>
      </BrowserRouter>

      
       
      </>
  )
}

export default App
