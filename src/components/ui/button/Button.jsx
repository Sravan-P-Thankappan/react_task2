
import React from 'react'
import './Button.css'

const Button = ({children,className,type,setError}) => {
    const classes = 'button '+className

    
  return (
    <div>
        <button 
        onClick={()=>setError(false)}
        className={classes}        
        type={type}>
        {children}
        </button>
    </div>
  )
}

export default Button