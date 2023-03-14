

import React from 'react'
import './Card.css'

const Card = (props) => {
     console.log(props.className)
    const customClass = 'card '+props.className
  return (
        
    <div className={customClass}>
         {props.children}
    </div>

  )
}
   
export default Card