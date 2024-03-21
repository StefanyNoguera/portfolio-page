'use client'
import Image from 'next/image'
import {Link} from 'react-scroll'
import { FullPage, Slide } from 'react-full-page';

export default function Home() {
  return (
    <main>
      <FullPage>
        <Slide>
        <div className="bg-beige h-screen">
          <div className='flex justify-between pl-3 pr-3'>
            <div className='relative h-14 w-14 md:h-16 md:w-16'>
              <Image
                src="/logo-gray.png"
                layout="fill"
                objectFit="cover"
                alt="Logo"
              />
            </div>
            <div className='flex items-center'>
              <h5 className='p-4' style={{ cursor: 'pointer' }}>
                <Link to="about" spy={true} smooth={true} duration={800} onClick={() => {}}>about</Link>
              </h5>
              <h5 className='p-4' style={{ cursor: 'pointer' }}>
                <Link to="services" spy={true} smooth={true} duration={800} onClick={() => {}}>services</Link>
              </h5>
              <h5 className='p-4' style={{ cursor: 'pointer' }}>
                <Link to="my-work" spy={true} smooth={true} duration={800} onClick={() => {}}>my work</Link>
              </h5>
              <h5 className='p-4' style={{ cursor: 'pointer' }}>
                <Link to="contact" spy={true} smooth={true} duration={800} onClick={() => {}}>contact</Link>
              </h5>
            </div>
          </div>
        </div>
        </Slide>

        <Slide>
        <div className="bg-gray h-screen" id='about'>

        </div>
        </Slide>

        <Slide>
        <div className="bg-beige h-screen" id='services'>

        </div>
        </Slide>

        <Slide>
        <div className="bg-gray h-screen" id='my-work'>

        </div>
        </Slide>

        <Slide>
        <div className="bg-beige h-screen" id='contact'>

        </div>
        </Slide>
      </FullPage>
    </main>
  );
}
