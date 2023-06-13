'use client'
import { useEffect, useState } from "react";

const Hello = () => {

    const [userData, setUserData] = useState(null);
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch("/api/user");
        // const response = await fetch("https://jsonplaceholder.typicode.com/posts/1/comments");
        const data = await response.json();
        setUserData(data);
        console.log(userData)
      };
      fetchData();
    }, []);


  return (
    <>
         <div>
      <h1>This is user/index router</h1>


      {userData ? (
        <p>Name: {userData.name}</p>
      ) : (
        <p>Loading...</p>
      )}
      
    </div>
    </>
  )
}

export default Hello
