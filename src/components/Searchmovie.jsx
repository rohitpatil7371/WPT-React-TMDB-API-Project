import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import ErrorBoundary from '../ErrorBoundry'
import { Link } from 'react-router'
import Image from './Image'



export default function Searchmovie() {
    let record = useSelector((state) => state.search.movieName)
    let [apidata, setApidata] = useState([]);
    let movieValue = useMemo(() => {
        let moviePrice = 1000;
        let fee = 100;
        let gst = 18 / 100;
        let total = (moviePrice + fee) * gst + (moviePrice + fee);
        console.log("Total Price:-", total);
        return total;
    }, []);
  
    
    useEffect(function () {
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=263969180f620b2160c1aea08bba6347&language=en-US&query=${record}&page=1`,)
            .then(function (res) {
                console.log(res.data.results);
                setApidata(res.data.results);
            })
            .catch(function (err) {
                console.log(err);
            });
    },[record])
    return (
        <div>
            Search Movie = 
            {record}
            <div className="grid gap-3 grid-cols-4">
                {apidata && apidata.map((value) => (
                    <div>
                        <ErrorBoundary>
                             <Image p1={value.poster_path} />
                        </ErrorBoundary>
                        
                        <p><Link to={"/singlemovie/"+value.id}>{value.title}</Link></p>
                        <p>{movieValue}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
