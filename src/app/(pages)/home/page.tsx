import React from 'react';
import MainFirstcomp from '@/components/(pages)/MainFirstcomp';
import Companylogo from '@/components/(pages)/Companylogo';
import Featuredproducts from '@/components/(pages)/Featuredproducts';
import TopcategoryComp from '@/components/(pages)/TopcategoryComp';
import OurProducts from '@/components/(pages)/OurProducts';

export default function Home() {
  return (
    <div className='bg-white'>
      
        <MainFirstcomp />
        <Companylogo />
        <Featuredproducts />
        <TopcategoryComp />
        <OurProducts />
     
    </div>
  )
}