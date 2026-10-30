
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Comp4() {
  let [data, setData] = useState([]);

  useEffect(function () {
    axios.get("http://localhost:4003/users")
      .then(function (res) {
        console.log(res);
        setData(res.data);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  return (
    <div className="w-6xl mx-auto p-4">
      <h1 className="text-center uppercase text-2xl">
        data From MongoDB
      </h1>

      <table className="w-full border-collapse border border-gray-400 text-center">
        <thead className="bg-orange-500 text-white">
          <tr>
            <th className="border border-gray-400 px-4 py-2">Name</th>
            <th className="border border-gray-400 px-4 py-2">Age</th>
            <th className="border border-gray-400 px-4 py-2">Place</th>
          </tr>
        </thead>

        <tbody>
          {
            data && data.map((value, index) =>
              <tr key={index} className="hover:bg-gray-100">
                <td className="border border-gray-400 px-4 py-2">{value.name}</td>
                <td className="border border-gray-400 px-4 py-2">{value.age}</td>
                <td className="border border-gray-400 px-4 py-2">{value.place}</td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}
