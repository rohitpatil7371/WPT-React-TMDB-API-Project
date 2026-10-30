import React, { useState } from 'react'
import Comp32 from './Comp32'
import Comp33 from './Comp33'

export default function Comp31() {
    let [category,setCategory]=useState("")
    function parentFunction(value) {
    console.log("Parent function called",value);
    setCategory(value)
    }


    return (
        <div className="border mx-auto p-4 w-6xl">Comp31
            <h1>State Life Example</h1>
            <hr />
            <div className="grid grid-cols-[25%_75%] gap-2" >
                <div>
                    <Comp32 p1={parentFunction } />
                </div>
                <div>
                    <Comp33 p2={category} />
                </div>
            </div>
        </div>
    );
}
