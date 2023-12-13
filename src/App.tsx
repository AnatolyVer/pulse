import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from './layouts/Header/Header';
import Main from './pages/Main/Main';
import SignIn from "./pages/SignIn/SignIn.tsx";
import SignUp from "./pages/SignIn/SignUp.tsx";
function App() {

  return (
      <>
          <Header/>
          <BrowserRouter>
              <Routes>
                  {<Route path="" element={<Main/>}/>}
                  <Route path="/sign_in" element={<SignIn/>}/>
                  <Route path="/sign_up" element={<SignUp/>}/>
              </Routes>
          </BrowserRouter>
      </>
  )
}

export default App
