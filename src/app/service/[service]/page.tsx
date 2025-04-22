import ServiceId from '@/components/service/ServiceId'
import React from 'react'

const page = async({params}: any) => {
    const {service} = await params
    console.log("first", service)
  return (
    <ServiceId service={service}/>
  )
}

export default page