import React,{useEffect} from 'react'
import {loginPath} from 'configs/env-vars'
const MainPage = () => {
  useEffect(()=>{
    setTimeout(()=>{
      window.location.pathname = loginPath
    },500)
  },[])
  return (
    <div></div>
  )
}

export default MainPage;