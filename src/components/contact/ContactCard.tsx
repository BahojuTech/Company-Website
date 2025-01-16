import React from 'react'

interface ContactProps {
    title: string;
    body: string;
    image: string;
}
const ContactCard: React.FC<ContactProps> = ({ title, image, body })=> {
    return (
        <>
            <div className='bg-white h-full text-center rounded-md shadow-[4px_4px_4px_#717171] py-16 px-12'>
                <img className='mx-auto' src={image} alt="" />
                <h3 className='font-medium mt-6 text-xl text-[#005F87]'>{title}</h3>
                <p className='text-xl mt-5 text-[#005F87]'>{body}</p>
            </div>
        </>
    )
}

export default ContactCard