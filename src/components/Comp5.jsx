
import axios from 'axios';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router';

export default function Comp5() {
  let x1 = useRef();
  let x2 = useRef();
  let x3 = useRef();
  let navigat = useNavigate();

  function myFunction1() {
    let record = {
      name: x1.current.value,
      age: x2.current.value,
      place: x3.current.value
    };

    axios.post("http://localhost:4003/users", record)
      .then(function (res) {
        console.log(res);
        navigat("/comp4");
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  return (
    <div className="mx-auto mt-20 max-w-sm rounded-xl bg-slate-900 p-6 shadow-xl">
      <h1 className="mb-6 text-center text-2xl font-bold text-orange-400">
        Add Record in MongoDB
      </h1>

      <input ref={x1} type="text" placeholder="Enter Name"
        className="mb-4 w-full rounded-lg border border-slate-600 bg-slate-800 p-3 text-white outline-none focus:border-orange-400" />

      <input ref={x2} type="text" placeholder="Enter Age"
        className="mb-4 w-full rounded-lg border border-slate-600 bg-slate-800 p-3 text-white outline-none focus:border-orange-400" />

      <input ref={x3} type="text" placeholder="Enter Place"
        className="mb-5 w-full rounded-lg border border-slate-600 bg-slate-800 p-3 text-white outline-none focus:border-orange-400" />

      <button onClick={myFunction1}
        className="w-full rounded-lg bg-orange-500 p-3 font-bold text-slate-900 transition hover:bg-orange-400">
        Add
      </button>
    </div>
  );
}
