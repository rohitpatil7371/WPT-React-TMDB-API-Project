import React, { useEffect, useState } from 'react'

export default function Comp3() {

      let [count, setCount] = useState(100);
  let [name, setName] = useState("Rohit");
  let [age, setAge] = useState(22);

  //This useEfect will be activated on component mount (one) and as will as component Unmount
  // useEffect(function () {
  //   console.log("Use Effect Hook Called", count, name, age);
  //   return () => {
  //     console.log("component unmounted");
      
  //   }
  // }, []);

   useEffect(function () {
    console.log("Use Effect Hook Called",count,name,age);   
   
  }, [name,age],);
  
  function myFunction1() { 
    setCount(count + 1);
  }
  function myFunction3() {
    setName("Patil");
  }
  function myFunction2() {
    setAge(age + 1);
  }
  

      

  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl"> Use Effect </h1>

      <p>count:{count}</p>
       <button onClick={myFunction1} className="border p-3">
                Update
            </button> 
      <p>age: {age}</p>
       <button onClick={myFunction2} className="border p-3">
                Update
            </button> 
      <p>name:{name}</p>
       <button onClick={myFunction3} className="border p-3">
                Update
            </button> 

    </div>
  );
}
