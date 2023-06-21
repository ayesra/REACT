import React, { useState } from 'react'
import Header from './components/Header'

const ReactMemo = () => {
  const[sayac,setSayac]=useState(0)

  const arttir=()=>{
    setSayac(sayac+1)
  }
  
    return (
    <div>
<Header/>

<p>COUNT: {sayac}</p>

<button onClick={arttir}>INCREASE</button>


    </div>
  )
}

export default ReactMemo