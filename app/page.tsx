// "use client"
// import { useEffect } from "react";

import { Suspense } from "react";
import SlowComponent from "./SlowComponent";

// type Post = {
//   id : number;
//   title : string;
// }

export default async function Home() {
  
  // useEffect(()=>{
  //   window.alert("window test")
  // },[])

  // const res = await fetch("https://jsonplaceholder.typicode.com/posts")
  // const posts : Post[] = await res.json()
  
  return (
    <div>
      {/* <h1>Hello world</h1>
      <button onClick={()=>alert("Clicked")}>clickボタン</button> */}

      {/* <h1>記事一覧</h1>
        <ul>
          {posts.map((post) => (
            <li key ={post.id}>{post.title}</li>
          ))}
        </ul> */}

        <h1>メインコンテンツ(すぐに表示)</h1>

        <Suspense fallback={<div>重いコンポーネントよみ込み中...</div>}>
          <SlowComponent />
        </Suspense>

    </div>
  );
}
