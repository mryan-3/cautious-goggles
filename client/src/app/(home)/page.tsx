import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function Home() {
  return (
    <div className='bg-background flex flex-col items-center gap-6 justify-center '>
      <Hero />
      <About />
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
    <div className='h-full pt-16 px-6 md:px-16 flex flex-col gap-5 items-center w-full'>
      <div className='flex flex-col md:flex-row gap-2 md:gap-4 items-center w-full'>
        <div className='flex items-center mr-1'>
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
      <div className='flex flex-col w-full gap-2 md:gap-5 text-xl md:text-4xl'>
        <h3 className=' uppercase font-extrabold w-full'>
          To understand their unique <span className='text-[#2981a0]'> needs and requirements,</span>{' '}
        </h3>
        <h3 className=' uppercase font-extrabold w-full text-[#2981a0]'>
          and we strive to provide personalized solutions{' '}
        </h3>
        <h3 className=' uppercase font-extrabold w-full text-[#2981a0]'>
          that meet their specific <span className='text-black'>goals.</span>
        </h3>
      </div>
      <div className='w-full h-full flex gap-3 pt-10 py-4'>
        <div className='flex items-end text-xl uppercase underline pr-4'>more about us</div>
        <div>
          <Image src='/constr.webp' alt='construction1' width={400} height={800} />
        </div>

        <div>
          <Image src='/const3.webp' alt='construction2' width={200} height={200} />
        </div>
        <div>
          <Image src='/cosnt2.webp' alt='construction3' width={350} height={600} />
        </div>
      </div>
    </div>
  )
}

