import React from 'react'
import ContactCard from './ContactCard'

type Card = {
    image: string,
    title: string,
    body: string
};

const Cards: Card[] = [
    {image: "/location.jpg", title: "Location", body: "44 Community Road, Off Allen, Ikeja, Lagos State"},
    {image:"/email.jpg", title: "Email", body:"Info@bahojutech.com"},
    {image:"/phone.jpg", title: "Call us", body:"+234 807 376 2546"}
]
const ContactInfo = () => {
    return (
        <section className='w-full bg-[#D5E5EC]'>
            <main className='max-w-[95rem] w-full mx-auto px-5 md:px-20 py-24'>
                <h1 className='font-semibold text-center text-4xl text-[#32A0CE]'>Let's get connected</h1>
                <p className='text-xl mt-3 text-center'>Contact us for customized solutions. Enroll today to transform your career.</p>
                <div className='mt-10 flex flex-wrap justify-around xl:px-10'>
                    {
                        Cards.map((card)=>(
                            <div key={card.title} className='lg:p-6 w-full mt-5 lg:w-1/3 '>
                                <ContactCard title={card.title} image={card.image} body={card.body}/>
                            </div>
                        ))
                    }
                </div>
            </main>
        </section>
    )
}

export default ContactInfo