import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'

export default function Home() {
  return (
    <div className='bg-background flex flex-col items-center gap-6 justify-center '>
      <Hero />
      <About2 />
      <ChooseUs />
      <Services />
    </div>
  )
}

function Hero() {
  return (
    <div className='min-h-screen bg-[url(/hero.webp)] bg-cover bg-center bg-no-repeat pt-8 md:pt-36 lg:pt-52'>
      <section className='relative mx-auto flex flex-col md:ml-5 lg:ml-36 px-6'>
        <div className='flex flex-col w-full lg:w-[80%] md:-ml-2 lg:-ml-24 xl:-mt-24 2xl:mt-0 gap-8 pt-4 text-wrap'>
          <h1 className='z-20 text-primary text-start text-5xl md:text-6xl font-bold leading-none '>
            Building Your Vision With Precision
          </h1>
          <p className='text-black text-xl font-bold whitespace-break-spaces md:leading-relaxed'>
            Buildr is more than a construction company. We're your partners in
            bringing your vision to life. With years of experience and a
            dedicated team, we deliver exceptional results that stand the test
            of time.{' '}
          </p>

          <Button variant='default' className='w-[200px]'>
            Discuss New Project
          </Button>
        </div>
      </section>
    </div>
  )
}

function About() {
  return (
    <div className='h-full py-16 px-6 md:px-16 flex flex-col gap-5 items-center w-full'>
      <div className='flex flex-col md:flex-row gap-2 md:gap-4 items-center w-full'>
        <div className='flex items-center md:mr-1 lg:mr-8'>
          <h3 className='text-nowrap text-2xl font-bold w-full md:w-[20%]'>
            About Buildr
          </h3>
        </div>
        <div className='w-full md:w-[25%] bg-black md:mr-6'>
          <div className='w-full h-1 border ' />
        </div>
        <h3 className='text-xl md:text-4xl uppercase font-extrabold w-full'>
          We work closely with our clients{' '}
        </h3>
      </div>
      <div className='flex flex-col w-full gap-2 md:gap-5 text-xl md:text-4xl tracking-wide'>
        <h3 className=' uppercase font-extrabold w-full'>
          To understand their unique{' '}
          <span className='text-[#2981a0]'> needs and requirements,</span>{' '}
        </h3>
        <h3 className=' uppercase font-extrabold w-full text-[#2981a0]'>
          and we strive to provide personalized solutions{' '}
        </h3>
        <h3 className=' uppercase font-extrabold w-full text-[#2981a0]'>
          that meet their specific <span className='text-black'>goals.</span>
        </h3>
      </div>
    </div>
  )
}

function Services() {
  return (
    <div className='h-scren bg-background py-8 px-6 md:px-16 flex flex-col gap-5 items-center w-full'>
      <div className='w-full flex flex-col gap-4'>
        <h3 className='text-4xl text-center  uppercase font-extrabold w-full text-[#2981a0] tracking-wider'>
          Our Services
        </h3>
        <h3 className='text-xl md:text-2xl text-center font-bold w-full'>
          Architecture Without Boundaries
        </h3>
      </div>
      <div className='w-full flex -red-50'>
        <Accordion type='single' collapsible className='w-full md:w-3/4 mx-auto '>
          <AccordionItem value='item-1'>
            <AccordionTrigger className='   '>
              Residential Architecture
            </AccordionTrigger>
            <AccordionContent className=' font-semibold tracking-wide text-[#132b39]'>
              Residential architecture is a field of architecture that focuses
              on creating spaces that are harmonious and aesthetically pleasing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-3'>
            <AccordionTrigger className='   '>
              Commercial Architecture
            </AccordionTrigger>
            <AccordionContent className=' font-semibold tracking-wide text-[#132b39]'>
              Commercial architecture is a field of architecture that focuses on
              creating spaces that are efficient and efficient.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-4'>
            <AccordionTrigger className=' '>
              Institutional Architecture
            </AccordionTrigger>
            <AccordionContent className=' font-semibold tracking-wide text-[#132b39]'>
              Institutional architecture is a field of architecture that focuses
              on creating spaces that are efficient and efficient.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-5'>
            <AccordionTrigger className=''>
              Sustainable Design
            </AccordionTrigger>
            <AccordionContent className=' font-semibold tracking-wide text-[#132b39]'>
              Sustainable design is a field of architecture that focuses on
              creating spaces that are efficient and efficient.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value='item-6'>
            <AccordionTrigger className=' '>
              Project Management
            </AccordionTrigger>
            <AccordionContent className=' font-semibold tracking-wide text-[#132b39]'>
              Project management is a field of architecture that focuses on
              creating spaces that are efficient and efficient.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  )
}

function About2() {
  return (
    <div className='h-full py-8 md:py-16 px-6 md:px-16 flex flex-col gap-5  items-center w-full'>
      <div className='pb-4 md:py-16'>
        <h3 className='text-3xl md:text-4xl capitalize font-extrabold w-full tracking-wide'>
          Creating World-class buildings that are attractive, beautiful, and
          sustainable.
        </h3>
      </div>
      <div className='w-full flex flex-col sm:flex-row gap-8 sm:gap-10'>
        <div className='flex flex-col'>
          <Image
            src='/const3.webp'
            width={300}
            height={300}
            alt='about'
            className='w-full rounded-2xl object-cover'
          />
          <div className='flex relative bottom-5 right-5 justify-end gap-2 w-full '>
            <div className=' flex items-center text-5xl font-extrabold justify-center w-10 h-10 rounded-full '>
              01
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h4 className='text-2xl font-bold w-full '>The Best Price</h4>
            <p className='text-base leading-6 font-medium'>
              We offer a wide range of services and products to meet your
              construction needs. Our team of experts has years of experience
              working with clients to develop customized solutions that meet
              their unique needs and preferences.
            </p>
          </div>
        </div>

        <div className='flex flex-col md:flex-col-reverse gap-4'>
          <div>
            <Image
              src='/const3.webp'
              width={300}
              height={300}
              alt='about'
              className='w-full rounded-2xl object-cover'
            />
            <div className='flex relative bottom-5 right-5 justify-end gap-2 w-full '>
              <div className=' flex items-center text-5xl font-extrabold justify-center w-10 h-10 rounded-full '>
                02
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h4 className='text-2xl font-bold w-full '>Daily Consultant</h4>
            <p className='text-base leading-6 font-medium'>
              We offer a wide range of services and products to meet your
              construction needs. Our team of experts has years of experience
              working with clients to develop customized solutions that meet
              their unique needs and preferences.
            </p>
          </div>
        </div>

        <div className='flex flex-col'>
          <Image
            src='/const3.webp'
            width={300}
            height={300}
            alt='about'
            className='w-full rounded-2xl object-cover'
          />
          <div className='flex relative bottom-5 right-5 justify-end gap-2 w-full '>
            <div className='flex items-center text-5xl font-extrabold justify-center w-10 h-10 rounded-full '>
              03
            </div>
          </div>
          <div className='flex flex-col gap-2'>
            <h4 className='text-2xl font-bold w-full '>Premium Quality</h4>
            <p className='text-base leading-6 font-medium'>
              We offer a wide range of services and products to meet your
              construction needs. Our team of experts has years of experience
              working with clients to develop customized solutions that meet
              their unique needs and preferences.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChooseUs() {
  return (
    <div className='h-full py-8 md:py-16 px-6 md:px-16 flex flex-col gap-5  items-center w-full'>
      <div className='flex flex-col gap-4'>
        <h3 className='text-3xl md:text-4xl capitalize font-extrabold w-full tracking-wide'>
          Why Choose Buildr
        </h3>
        <p className='font-medium text-base text-start '>
          At Buildr we are committed to helping our clients succeed. We have a
          proven track record of success. Here's why you should choose us:
        </p>
      </div>
      <div className='w-full flex flex-col md:flex-row gap-8 items-center justify-center'>
        <div className='flex flex-col justify-center mt-1 items-cener w-full md:w-1/2'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-4'>
                <Check className='bg-black text-white rounded-full w-8 h-8 p-1' />
                <p>Proven Track Record</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>We have a decade long of projects that are successful</p>
            </CardContent>
          </Card>
        </div>

        <div className='flex flex-col justify-center items-cener w-full md:w-1/2'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-4'>
                <Check className='bg-black text-white rounded-full w-8 h-8 p-1' />
                <p>Proven Track Record</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>We have a decade long of projects that are successful</p>
            </CardContent>
          </Card>
        </div>

        <div className='flex flex-col justify-center mt-1 items-cener w-full md:w-1/2'>
          <Card>
            <CardHeader>
              <CardTitle className='flex items-center gap-4'>
                <Check className='bg-black text-white rounded-full w-8 h-8 p-1' />
                <p>Proven Track Record</p>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>We have a decade long of projects that are successful</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
