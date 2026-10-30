import axios from "axios";
import React, { useEffect, useState } from "react";

import Image from "./Image";
import ErrorBoundary from "../ErrorBoundry";

export default function Comp41() {
  let [info, setInfo] = useState([]);
  useEffect(function () {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/1058424/credits?api_key=263969180f620b2160c1aea08bba6347&language=en-US`,
      )
      .then(function (res) {
        console.log(res.data);
        setInfo(res.data.cast);
      });
  }, []);
  return (
    <div className="border mx-auto w-7xl">
      <h1 className="text-2xl">Error Boundry Ex</h1>
      <div className="grid gap-2 grid-cols-6">
        {info &&
          info.map((value) => (
            <div className="text-center">
              <ErrorBoundary>
                <Image p1={value.profile_path} />
              </ErrorBoundary>

              <p>{value.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
}