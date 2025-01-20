import React from 'react'
import Service from "@/components/service/Service";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Service"
};

const ServicePage = () => {
  return (
    <Service />
    
  )
}

export default ServicePage