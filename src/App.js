import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./components/Login";
import SignupForm from "./components/SignupForm";
import Mypage from "./pages/Mypage";
import { getCookie } from "./utils/cookie";

function App() {
  const [isLogin, setisLogin] = useState(false);
  useEffect(()=>{
    // console.log(getCookie('id').id)

    if(getCookie('id')){
      setisLogin(true)
    }else{
      setisLogin(false)
    }
    console.log(isLogin)
},[])
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Main/>}/>
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<SignupForm/>}/>
        <Route exact path="/mypage" element={<Mypage/>}/>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
