import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          Frontend Mentor Challenge - Intro section with dropdown navigation
        </title>
      </Head>

      <header className='max-w-[1920px] mx-auto px-4 2xl:px-9'>
        <nav className='flex items-center justify-between py-5'>
          <div className='flex items-center'>
            <div className='block w-[84px] mr-[2.5vw]'>
              <Image
                src='/images/logo.svg'
                layout='responsive'
                className='block'
                width={84}
                height={27}
              />
            </div>
            <div>
              <ul className='flex items-center'>
                <li>
                  <a
                    className='text-[#818181] hover:text-[#171717] transition-all duration-300 mr-[2.5vw]'
                    href='#'
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    className='text-[#818181] hover:text-[#171717] transition-all duration-300 mr-[2.5vw]'
                    href='#'
                  >
                    Company
                  </a>
                </li>
                <li>
                  <a
                    className='text-[#818181] hover:text-[#171717] transition-all duration-300 mr-[2.5vw]'
                    href='#'
                  >
                    Carrers
                  </a>
                </li>
                <li>
                  <a
                    className='text-[#818181] hover:text-[#171717] transition-all duration-300'
                    href='#'
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className='flex items-center'>
            <a
              className='text-[#818181] hover:text-[#171717] transition-all duration-300 mr-[2.5vw]'
              href='#'
            >
              Login
            </a>
            <a
              className='text-[#818181] hover:text-[#171717] transition-all duration-300 py-2 px-5 border-2 rounded-xl border-[#818181] hover:border-[#171717]'
              href='#'
            >
              Register
            </a>
          </div>
        </nav>
      </header>
      <main className='container mx-auto px-4 pt-4 pb-8'>
        <section className='flex items-end justify-between'>
          <div className='w-6/12'>
            <h1 className='font-bold text-5xl xl:text-7xl text-[#171717]'>
              Make <br /> remote work
            </h1>
            <p className='text-md xl:text-xl text-[#818181] mt-[4vw]'>
              Get your team in sync, no matter your location.
            </p>
            <p className='text-md xl:text-xl text-[#818181] max-w-lg'>
              Streamline processes, create team rituals, and watch productivity
              soar.
            </p>
            <a
              className='font-bold text-xl xl:text-2xl text-white bg-[#171717] border-2 border-[#171717] rounded-2xl py-4 px-7 xl:py-5 xl:px-10 inline-block mt-[4vw] hover:bg-white hover:text-[#171717] transition-all duration-300'
              href='#'
            >
              Learn more
            </a>
            <div className='flex items-center justify-between mt-[5vw]'>
              <div className='w-1/6'>
                <Image
                  src='/images/client-databiz.svg'
                  layout='responsive'
                  width={114}
                  height={20}
                />
              </div>
              <div className='w-1/6'>
                <Image
                  src='/images/client-audiophile.svg'
                  layout='responsive'
                  width={73}
                  height={36}
                />
              </div>
              <div className='w-1/6'>
                <Image
                  src='/images/client-meet.svg'
                  layout='responsive'
                  width={90}
                  height={20}
                />
              </div>
              <div className='w-1/6'>
                <Image
                  src='/images/client-maker.svg'
                  layout='responsive'
                  width={83}
                  height={24}
                />
              </div>
            </div>
          </div>
          <div className='w-5/12'>
            <Image
              src='/images/image-hero-desktop.png'
              layout='responsive'
              width={960}
              height={1280}
            />
          </div>
        </section>
      </main>
    </div>
  )
}
