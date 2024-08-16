import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className='bg-background flex justify-center'>
      <Hero />
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
          Get Started
        </Button>
        </div>
      </section>
    </div>
  )
}
