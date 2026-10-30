import React, { useRef } from "react";
import { Link, useNavigate } from "react-router";
import { searchMovie } from "../redux/slices/searchSlice";
import { useDispatch, useSelector } from "react-redux";


function Header() {
    let record = useSelector(state => state.cart.cartValue);
     let x1 = useRef();
     let navigate = useNavigate()
     let dispatch=useDispatch()
     function myFunction() {
         if (x1.current.value != "") {
             dispatch(searchMovie(x1.current.value));
             navigate("/search");
         }
     }

     return (
         <header class="w-sm lg:w-6xl mx-auto pt-2 pb-2 flex flex-col lg:flex-row">

        <figure class="logo w-full lg:w-1/6">
        <img class="animate__animated animate__bounce" src="images/logo.png" alt="Logo will be shown shortly"/>
        </figure>
        <nav class="w-full lg:w-5/6">
            <ul class="flex justify-center lg:justify-end pt-2">
                <li class="pl-2 pr-2">
                    <Link to="">Home</Link>
                </li>
    
                <li class="pl-2 pr-2">
                    <Link to="comp1">Lable1</Link>
                </li>
    
                <li class="pl-2 pr-2">
                    <Link to="comp2">Lable2</Link>
                </li>
    
                <li class="pl-2 pr-2">
                    <Link to="comp3">Lable3</Link>
                </li>
    
                <li class="pl-2 pr-2">
                    <Link to="comp4">Lable4</Link>
                </li>

                <li class="pl-2 pr-2">
                    <Link to="comp5">Lable5</Link>
                </li>

                <li class="pl-2 pr-2">
                    <Link to="comp11">Props Drilling</Link>
                </li>

                 <li class="pl-2 pr-2">
                    <Link to="comp21">Context API</Link>
                </li>

                 <li class="pl-2 pr-2">
                    <Link to="comp31">State Lift</Link>
                </li>

                <li class="pl-2 pr-2">
                    <Link to="comp41">Error Boundry Ex</Link>
                     </li>
                     
                      <li class="pl-2 pr-2">
                    <Link to="cart">Cart({record.length})</Link>
                </li>

                
                <li class="pl-2 pr-2">
                    <input ref={x1} className="border" type="text" />
                    <button onClick={myFunction} className="border cursor-pointer">Search</button>
                </li>
                
            </ul>

        </nav>
    </header>
    );
}

export default Header

//module.exports = Header; Export Component