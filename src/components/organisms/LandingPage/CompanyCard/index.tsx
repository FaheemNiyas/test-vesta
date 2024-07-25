import { EthereumIcon } from '@/constants'
import React from 'react'

export default function CompanyCard({companyIcon}: {companyIcon:string}) {
  return (
    <div className='flex flex-col w-full justify-center items-center gap-2'>
        <img src={companyIcon} className='md:w-[120px] w-[100px]'/>
        <div className="text-white text-base font-medium font-['Inter']  leading-none">Veste Ltd.</div>
        <div className="flex flex-row gap-2 justify-center items-center text-stone-300 text-sm font-semibold font-['Poppins'] leading-[14.42px]"><img src={EthereumIcon} alt="eth-icon"/>19,769.39</div>
    </div>
  )
}
