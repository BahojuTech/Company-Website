import Hero from '@/components/blog/Hero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import React from 'react'

const page = () => {
    return (
        <>
            <Hero title={"Contact us"} body={"Start the conversations to established good relationship and business"} />
            <ContactInfo />
            <ContactForm />
        </>
    )
}

export default page