// "use client"
// import { useEffect } from "react";

type Post = {
  id : number;
  title : string;
}

export default async function Home() {
  
  // useEffect(()=>{
  //   window.alert("window test")
  // },[])

  const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  const posts : Post[] = await res.json()
  
  return (
    <div>
      {/* <h1>Hello world</h1>
      <button onClick={()=>alert("Clicked")}>clickボタン</button> */}

      <h1>記事一覧</h1>
        <ul>
          {posts.map((post) => (
            <li key ={post.id}>{post.title}</li>
          ))}
        </ul>
    </div>
  );
}
