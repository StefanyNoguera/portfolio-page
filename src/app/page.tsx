import Image from 'next/image'

export default function Home() {
  return (
    <main>
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
            <h5 className='p-4'>about</h5>
            <h5 className='p-4'>services</h5>
            <h5 className='p-4'>work</h5>
            <h5 className='p-4'>contact</h5>
          </div>
        </div>
      </div>

      <div className="bg-gray h-screen">

      </div>

      <div className="bg-beige h-screen">

      </div>

      <div className="bg-gray h-screen">

      </div>

      <div className="bg-beige h-screen">

      </div>
    </main>
  );
}
