import React from 'react'
import { useParams } from 'react-router'

export default function Singlemovie() {
    let result = useParams();
    console.log(result); {id:'962640'}
    
  return (
    <div>Single movie page</div>
  )
}
