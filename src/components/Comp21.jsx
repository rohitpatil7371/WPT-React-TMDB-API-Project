import React, { useRef, useState } from 'react'
import Comp22 from './Comp22';
import CONTEXT from './Contextapi';

export default function Comp21() {
    let x1 = useRef();
    let [category, setCategory] = useState("");
    function myFunction() {
        setCategory(x1.current.value);
    }
    return (
        <div className="w-6xl border p-4 mx-auto">
            Comp21
            <h1 className="text-2xl">Context API</h1>
            <input ref={x1} type="text" className="border" />
            <button onClick={myFunction} className="border ml-1" >Search</button>
          
            <hr />
            <CONTEXT.Provider value={category}>
              <Comp22 />
            </CONTEXT.Provider>
            
        </div>
    );
}
