import React, { useContext, useEffect, useState } from 'react'
import CONTEXT from './Contextapi'
import axios from 'axios';

export default function Comp24() {
    let result = useContext(CONTEXT);
    let [apidata, setApidata] = useState([]);
    useEffect(function () {
        console.log("Call API", result);
        let apipath = ""
        if (result == "") {
            apipath = "https://fakestoreapi.com/products";
        } else {
            apipath = `https://fakestoreapi.com/products/category/${result}`;
        }
        axios
            .get(apipath)
            .then(function (res) {
                console.log(res);
                setApidata(res.data)
            })
            .catch(function (err) {
                console.log(err); 
            });
        
    }, [result]);
    return (
        <div>
            Comp24
            {result}
            <hr />
            <div className="grid gap-4 grid-cols-4">
                {apidata && apidata.map(value =>(
                    <figure>
                        <img src={value.image} alt="" />
                        <figcaption>
                        <h2>{value.price}</h2>
                        <p>{value.title}</p>
                        </figcaption>    
                    </figure>
                ))}
            </div>
        </div>
    );
}

