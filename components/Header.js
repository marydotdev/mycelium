import Link from 'next/link'

export default function Hero() {
  return (
      <div className="w-full">
        <header className='p-4'>
          <nav className='flex justify-between items-baseline'>
            <Link href="/">
              <a className='text-lg sm:text-xl md:text-2xl font-medium'>Mycelium</a>
            </Link>
            <Link href="/">
            <a className='text-md sm:text-lg font-medium'>Coming Soon</a>
            </Link>
          </nav>
        </header>
      </div>
  )
}