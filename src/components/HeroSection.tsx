import Link from 'next/link'
import React from 'react'
import { Button } from "./ui/moving-border";
import { Spotlight } from './ui/Spotlight'

export default function HeroSection() {
  return (
    <div className='text-white h-auto md:h-[40rem] w-full rounded 
    flex flex-col items-center justify-center relative overflow-hidden 
    mx-auto py-10 md:py-0'>
       <div className='p-4 relative z-10 w-full text-center'>
            <Spotlight
                className="-top-40 left-0 md:left-60 md:-top-20"
                fill="white"
            />
            <h1
            className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
            >Master the art of music</h1>
            <p
            className="mt-4 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto"
            >Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            <div className='mt-4'>
               <Link href={"/courses"}>
                 <Button borderRadius='3.75rem'>
                    Explore courses
                 </Button>
               </Link>
            </div>
       </div>
    </div>
  )
}
