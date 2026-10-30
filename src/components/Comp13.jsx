import React from 'react'
import Comp14 from './Comp14'

export default function Comp13(props) {
  return (
      <div className="border p-4">
        Comp13
        <hr />
          <Comp14 p3={props.p2} />
        </div>
  
  )
}
