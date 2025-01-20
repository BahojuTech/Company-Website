import React from 'react'
import Training from '@/components/training/Training'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Training"
};

const TrainingPage = () => {
  return (
    <Training />
  )
}

export default TrainingPage