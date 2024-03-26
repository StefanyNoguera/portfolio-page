'use client'
import Image from 'next/image'

export default function Home() {
  const handleClickAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickWork = () => {
    const element = document.getElementById('my-work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main>
      <div className='snap-y snap-mandatory h-screen w-screen overflow-y-scroll'>
        <div className="snap-start bg-beige h-screen">
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
              <h5 className='p-4'>
                <button onClick={handleClickAbout}>about</button>
              </h5>
              <h5 className='p-4'>
                <button onClick={handleClickServices}>services</button>
              </h5>
              <h5 className='p-4'>
                <button onClick={handleClickWork}>my work</button>
              </h5>
              <h5 className='p-4'>
                <button onClick={handleClickContact}>contact</button>
              </h5>
            </div>
          </div>
        </div>

        <div className="snap-start bg-gray h-screen" id='about'>

        </div>

        <div className="snap-start bg-beige h-screen" id='services'>

        </div>

        <div className="snap-start bg-gray h-screen" id='my-work'>

        </div>

        <div className="snap-start bg-beige h-screen" id='contact'>
          <div className='pl-16 pt-48 lg:pt-14 lg:pl-32 md:pl-28 md:pt-36'>
            <h2 className='pb-5 md:pb-0'>contact me</h2>
            <div className='py-4 md:py-3'>
              <p className='font-medium'>email:</p>
              <p>stefanynoguerar@gmail.com</p>
            </div>
            <div className='py-4 md:py-3'>
              <p className='font-medium'>linkedin:</p>
              <p>linkedin.com/in/stefanynoguera/</p>
            </div>
            <div className='py-4 md:py-3'>
              <p className='font-medium'>github:</p>
              <p>github.com/StefanyNoguera</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
