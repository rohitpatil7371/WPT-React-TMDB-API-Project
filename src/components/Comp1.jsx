import React, { useRef } from 'react'
//DOM Manipulation must be done in React via useRef()
//Every Hook in React In satrt with "use"
//Hook must be written in function 
    
export default function Comp1() {
    let x1 = useRef();
    let x2 = useRef();
    let x3 = React.createRef();
    function myFunction1() {
        console.log(x1, x2, x3);
        let data1 = x1.current.value;
        let data2 = x2.current.value;
        if (data1 == "" || data2 == "") {
            x3.current.innerText = "All Values Are Required";
        }
        else {
            data1 = +data1;
            data2 = +data2;

            console.log(typeof data1); 
            x3.current.innerHTML = data1 * data2;
            
        }
        
    }
     function myFunction2() {
        console.log(x1, x2, x3);
        let data1 = x1.current.value;
        let data2 = x2.current.value;
        if (data1 == "" || data2 == "") {
            x3.current.innerText = "All Values Are Required";
        }
        else {
            data1 = +data1;
            data2 = +data2;

            console.log(typeof data1); 
            x3.current.innerHTML = data1 + data2;
            
        }
        
    }
     function myFunction3() {
        console.log(x1, x2, x3);
        let data1 = x1.current.value;
        let data2 = x2.current.value;
        if (data1 == "" || data2 == "") {
            x3.current.innerText = "All Values Are Required";
        }
        else {
            data1 = +data1;
            data2 = +data2;

            console.log(typeof data1); 
            x3.current.innerHTML = data1 - data2;
            
        }
        
    }
     function myFunction4() {
        console.log(x1, x2, x3);
        let data1 = x1.current.value;
        let data2 = x2.current.value;
        if (data1 == "" || data2 == "") {
            x3.current.innerText = "All Values Are Required";
        }
        else {
            data1 = +data1;
            data2 = +data2;

            console.log(typeof data1); 
            x3.current.innerHTML = data1 / data2;
            
        }
        
    }
    
    return (
        <div className="w-6xl mx-auto p-4">
            <h1 className="text-center uppercase text-2xl"> Reference Variable </h1>

            <input type="text" className="border" ref={x1} />
            <br />
            <br />
            <input type="text" className="border" ref={x2} />
            <br />
            <br />
            <button onClick={myFunction1} className="border p-3">
                x
            </button> 
            <button onClick={myFunction2} className="border p-3">+</button>
            <button onClick={myFunction3} className="border p-3">-</button>
            <button onClick={myFunction4} className="border p-3">/</button>
            <p ref={x3}></p>

        </div>

    );
}
