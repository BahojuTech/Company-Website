import React from 'react'

type ButtonProps = {
  text?:string;
  bg?:boolean;
}

const Button = ({text, bg}:ButtonProps) => {
  return (
    <div className={`border border-primary w-fit m-auto px-2 py-1 rounded-lg cursor-pointer ${bg && 'bg-primaryThick text-white'}`}>
        {text}
    </div>
  )
}

export default Button