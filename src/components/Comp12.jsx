import React from 'react'
import Comp13 from './Comp13'

export default function Comp12(props) {
  return (
     <div className="border p-4">
        Comp12
        <hr />
          <Comp13 p2={props.p1} />
        </div>
  )
}
