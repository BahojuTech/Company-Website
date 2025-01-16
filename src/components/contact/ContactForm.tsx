import React from 'react'

const ContactForm = () => {
    return (
        <>
            <section className='w-full bg-[#D5E5EC]'>
                <main className='max-w-[95rem] w-full mx-auto px-5 md:px-20 pb-24 pt-6'>
                    <h1 className='font-semibold text-3xl text-center text-[#005F87]'>Reach out today for tailored solutions!</h1>
                    <div className='flex flex-wrap lg:px-5 md:px-10 justify-between mt-8'>
                        <input className='md:w-[48%] w-full mt-5 outline-none text-lg placeholder:text-black placeholder:font-medium bg-[#FFFFFF80] px-6 py-4 rounded border border-[#32A0CE]' type="text" placeholder='Name'/>
                        <input className='md:w-[48%] w-full mt-5 outline-none text-lg placeholder:text-black placeholder:font-medium bg-[#FFFFFF80] px-6 py-4 rounded border border-[#32A0CE]' type="text" placeholder='Company'/>
                        <input className='md:w-[48%] w-full mt-5 outline-none text-lg placeholder:text-black placeholder:font-medium bg-[#FFFFFF80] px-6 py-4 rounded border border-[#32A0CE]' type="text" placeholder='Phone'/>
                        <input className='md:w-[48%] w-full mt-5 outline-none text-lg placeholder:text-black placeholder:font-medium bg-[#FFFFFF80] px-6 py-4 rounded border border-[#32A0CE]' type="text" placeholder='Email'/>
                        <input className='w-full mt-5 outline-none text-lg placeholder:text-black placeholder:font-medium bg-[#FFFFFF80] px-6 py-4 rounded border border-[#32A0CE]' type="text" placeholder='Subject'/>
                        <textarea className='w-full mt-5 outline-none text-lg placeholder:text-black placeholder:font-medium bg-[#FFFFFF80] px-6 py-4 rounded border border-[#32A0CE]' placeholder='Message'></textarea>
                    </div>
                </main>
            </section>
        </>
    )
}

export default ContactForm