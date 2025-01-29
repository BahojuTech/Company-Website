import Link from 'next/link';
import React from 'react'

type ButtonProps = {
  text?:string;
  bg?:boolean;
  link?:string;
}

const Button = ({text, bg, link}:ButtonProps) => {
  return (
    <Link href={link || ''} className={`border border-primary w-fit m-auto px-2 py-1 rounded-lg cursor-pointer ${bg && 'bg-primaryThick text-white'}`}>
        {text}
    </Link>
  )
}

export default Button