"use client"

import { useEffect } from "react";

export default function Home() {
  
  useEffect(()=>{
    window.alert("window test")
  },[])
  
  return (
    <div>
      <h1>Hello world</h1>
      <button onClick={()=>alert("Clicked")}>clickボタン</button>
    </div>
  );
}
