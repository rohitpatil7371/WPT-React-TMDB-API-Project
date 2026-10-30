//Props values cannot be changed ,props values are only for Read-only Purpose and use them ,so when we want changable data in componet we will go for state vareable 


import React, { useState } from 'react'

export default function Comp2(props) {

    let [count, setCount] = useState(100);
    console.log(setCount);
    

    let [brands,setBrands] = useState(["LG", "Philips"]);

    let [name,setName] = useState("Rohit");

    let [info,setImfo] = useState({ "place": "Barshi" });

    let [status] = useState(true);


    let userName = "root";
    function myFunction1() {
        props.p1 = 200;
    }
    function myFunction2() {
        userName = "Rohit";
    }
    function myFunction3() {
        setCount(count + 1);
    }
     function myFunction4() {
         setBrands(["Panasonic", "Godarej"]);
         setName("Rohit");
         setImfo({ place: "Barshi" });

    }
    return (
        <div className="w-6xl mx-auto p-4">
            <h1 className="text-center uppercase text-2xl"> Props VS State </h1>
            <p>Props Values={props.p1}
                {props.p2}
            </p>
             <button onClick={myFunction1} className="border p-3">
                Update
            </button> 
            <p>
                localVariable={userName}
            </p>
               <button onClick={myFunction2} className="border p-3">
                Update
            </button> 
            <p>
                stateVariable:{count}
            </p>
             <button onClick={myFunction3} className="border p-3">
                Update 
            </button> 
            <p>Brands:{brands[0]}{brands[1]}</p>
            <p>UserName:{name}</p>
            <p>UserPlace:{info.place}</p>
             <button onClick={myFunction4} className="border p-3">
                Update 
            </button> 

        </div>
    );
}
