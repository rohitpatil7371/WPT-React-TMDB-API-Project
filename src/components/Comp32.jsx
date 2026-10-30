import React from 'react'

export default function Comp32(props) {

    function myFunction(ev) {
        console.log(ev);
        console.log(ev.target.innerText);
        let record = ev.target.innerText.toLowerCase().trim();
        console.log(record);
        props.p1(record);
    }
            return (
        
        <div>
        <ul>
            <li onClick={(ev) => { myFunction(ev); }}>
                Electronics
            </li>
            <li onClick={(ev) => { myFunction(ev); }}>
                jewelery
            </li>
            <li onClick={(ev) => { myFunction(ev); }}>
                men's clothing
            </li>
            <li onClick={(ev) => { myFunction(ev); }}>
                women's clothing
            </li>
        </ul>    
      </div>
  )
}
