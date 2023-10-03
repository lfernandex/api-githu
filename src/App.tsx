import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./route/HomePage"
import InitialPage from "./route/HomePage/InitialPage"
import NotFoundUser from "./route/HomePage/NotFoundUser"
import ReturnResult from "./route/HomePage/ReturnResult"
import SerachPage from "./route/HomePage/SearchPage"



function App() {


  return (

    <>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<HomePage />} >

            <Route index element={<InitialPage />} />

            <Route path="/findbyuser" element={<SerachPage />} >

              <Route path="/findbyuser/result" element={<ReturnResult/>} ></Route>
              <Route path="/findbyuser/notfound" element={<NotFoundUser/>}></Route>
 
            </Route>

          </Route>

        </Routes>

      </BrowserRouter>



    </>


  )
}

export default App

/*
          
*/