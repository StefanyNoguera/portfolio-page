'use client'
import Image from 'next/image'
import Link from 'next/link'

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
        <div className="snap-start h-screen md:bg-[radial-gradient(ellipse_90%_50%_at_top,_var(--tw-gradient-stops))] bg-[radial-gradient(ellipse_130%_50%_at_top,_var(--tw-gradient-stops))] from-pink to-beige">
          <div className='flex justify-between pl-3 pr-3'>
            <div className='relative h-14 w-14 md:h-16 md:w-16'>
              <Image
                src="/logo-beige.png"
                layout="fill"
                objectFit="cover"
                alt="Logo"
              />
            </div>
            <div className='flex items-center'>
              <h5 className='md:p-4 p-2'>
                <button onClick={handleClickAbout} className='text-beige'>about</button>
              </h5>
              <h5 className='md:p-4 p-2'>
                <button onClick={handleClickServices} className='text-beige'>skills</button>
              </h5>
              <h5 className='md:p-4 p-2'>
                <button onClick={handleClickWork} className='text-beige'>projects</button>
              </h5>
              <h5 className='md:p-4 p-2'>
                <button onClick={handleClickContact} className='text-beige'>contact</button>
              </h5>
              <h5 className='md:p-4 p-2'>
                <a href="./public/STEFANY NOGUERA - Resume.pdf" download className='text-beige'>resume</a>
              </h5>
            </div>
          </div>
          <div className='pl-9 pt-48 md:pl-24 md:pt-36 lg:pt-32'>
            <h4 className='leading-none text-beige'>STEFANY NOGUERA</h4>
            <h1 className='h-24 md:h-36 lg:h-48 leading-none'>computer science<br /> student</h1>
          </div>
        </div>

        <div className="snap-start bg-gray h-screen" id='about'>
          <div className='p-16 lg:pl-32 md:pl-28 md:w-3/5 pt-28 lg:pt-20'>
            <h4 className='text-beige leading-loose'>about me</h4>
            <p className='text-beige'>
            I am a dedicated Computer Science student at Goldsmiths, University of London, with a strong focus on web development and scalable solutions. Proficient in Ruby on Rails, Next.js and Python. <br /> I have developed user-centric applications through both academic projects and a Web Development Bootcamp at Le Wagon. <br />
            My experience includes building interactive web applications. I am fluent in Spanish, English and French allowing me to thrive in diverse environments. <br />Currently seeking internship opportunities where I can contribute my technical skills and passion for innovation.
            </p>
          </div>
        </div>

        <div className="snap-start md:bg-[radial-gradient(ellipse_70%_80%_at_bottom_right,_var(--tw-gradient-stops))] bg-[radial-gradient(ellipse_100%_40%_at_bottom,_var(--tw-gradient-stops))] from-pink to-beige h-screen" id='services'>
          <h2 className='pl-10 pb-10 pt-16 md:pb-0 md:pt-0 md:pl-24 md:text-9xl text-6xl'>my skills</h2>

          <div className='overflow-hidden'>

            <div className="flex md:pt-16 pt-24 md:space-x-44 space-x-10 animate-loop-scroll">
                <Image
                      src="/cloudinary.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="cloudinary"
                    />
                <Image
                      src="/git-logo.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="git"
                    />
                <Image
                      src="/github.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="github"
                    />
                <Image
                      src="/javascript-logo.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="javascript"
                    />
                <Image
                      src="/next-logo.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="next"
                    />
                <Image
                      src="/cloudinary.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="cloudinary"
                    />
                <Image
                      src="/git-logo.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="git"
                    />
                <Image
                      src="/github.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="github"
                    />
                <Image
                      src="/javascript-logo.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="javascript"
                    />
                <Image
                      src="/next-logo.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="next"
                    />
            </div>

            <div className="flex md:space-x-44 space-x-10 animate-loop-scroll p-10 pt-12 md:p-20">
                <Image
                      src="/p5js-logo.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="P5.js"
                    />
                <Image
                      src="/python-logo.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="python"
                    />
                <Image
                      src="/rails-logo.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="ruby on rails"
                    />
                <Image
                      src="/ruby-logo.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="ruby"
                    />
                <Image
                      src="/sql-logo.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="next"
                    />
                <Image
                      src="/p5js-logo.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="P5.js"
                    />
                <Image
                      src="/python-logo.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="python"
                    />
                <Image
                      src="/rails-logo.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="ruby on rails"
                    />
                <Image
                      src="/ruby-logo.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="ruby"
                    />
                <Image
                      src="/sql-logo.png"
                      width={100}
                      height={110}
                      loading="lazy"
                      className="object-contain shrink-0 max-w-full aspect-[0.98]"
                      alt="next"
                    />
            </div>
          </div>

        </div>

        <div className="snap-start bg-gray h-screen md:bg-[radial-gradient(ellipse_90%_50%_at_center,_var(--tw-gradient-stops))] bg-[radial-gradient(ellipse_130%_50%_at_center,_var(--tw-gradient-stops))] from-pink to-gray" id='my-work'>
          <h4 className='text-beige pl-9 pt-9'>projects</h4>

          <div className="grid grid-cols-1 md:grid-cols-2 md:p-6">

            {/* Project 1 */}
            <div className="bg-white rounded-lg ">
              <a href="https://portfolio-page-75ag.vercel.app/" target="_blank" rel="noopener noreferrer" className="relative w-[416px] h-[236px] mx-auto block">
                <Image
                  src="/portfolio-pic.png"
                  alt="Project 1"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-sm transition-transform duration-200 transform hover:scale-105"
                />
              </a>
              <div className="flex justify-end p-2 w-[416px] mx-auto">
                <a href="https://portfolio-page-75ag.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-beige font-semibold mb-2 text-lg hover:underline">
                  Personal Portfolio
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg ">
              <a href="https://stefanynoguera.github.io/draw-app-website/" target="_blank" rel="noopener noreferrer" className="relative w-[416px] h-[236px] mx-auto block">
                <Image
                  src="/paint-project-pic.png"
                  alt="Painting App"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-sm transition-transform duration-200 transform hover:scale-105"
                />
              </a>
              <div className="flex justify-end p-2 w-[416px] mx-auto">
                <a href="https://stefanynoguera.github.io/draw-app-website/" target="_blank" rel="noopener noreferrer" className="text-beige font-semibold mb-2 text-lg hover:underline">
                  Painting App University Project
                </a>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg ">
              <a href="https://stefanynoguera.github.io/game-project-website/" target="_blank" rel="noopener noreferrer" className="relative w-[416px] h-[236px] mx-auto block">
                <Image
                  src="/game-project-pic.png"
                  alt="Game Project"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-sm transition-transform duration-200 transform hover:scale-105"
                />
              </a>
              <div className="flex justify-end p-2 w-[416px] mx-auto">
                <a href="https://stefanynoguera.github.io/game-project-website/" target="_blank" rel="noopener noreferrer" className="text-beige font-semibold mb-2 text-lg hover:underline">
                  Game University Project
                </a>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-lg ">
              <a href="https://the-luxury-collection-7a95ba2e8480.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="relative w-[416px] h-[236px] mx-auto block">
                <Image
                  src="/luxury-collection-pic.png"
                  alt="The Luxury Collection"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-sm transition-transform duration-200 transform hover:scale-105"
                />
              </a>
              <div className="flex justify-end p-2 w-[416px] mx-auto">
                <a href="https://the-luxury-collection-7a95ba2e8480.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="text-beige font-semibold mb-2 text-lg hover:underline">
                  The Luxury Collection
                </a>
              </div>
            </div>
          </div>
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
              <Link href="https://www.linkedin.com/in/stefanynoguera/" target="_blank" rel="noopener noreferrer">
                <p>linkedin.com/in/stefanynoguera/</p>
              </Link>
            </div>
            <div className='py-4 md:py-3'>
              <p className='font-medium'>github:</p>
              <Link href="https://github.com/StefanyNoguera" target="_blank" rel="noopener noreferrer">
                <p>github.com/StefanyNoguera</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
