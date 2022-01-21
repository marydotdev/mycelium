import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const navigation = [
  { name: 'Products', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Research', href: '#' },
  { name: 'Company', href: '#' },
]

export default function Hero() {
  return (
      <div className="relative py-6">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto text-stone-800">
                  <a href="#">
                    <span className="sr-only">Mycelium Logo</span>
                    <span className="flex justify-center items-center gap-4">
                      <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 24H40C40 16.54 34.88 10.26 28 8.5C27.72 10.48 26 12 24 12C22 12 20.28 10.48 20 8.5C13.12 10.26 8 16.54 8 24ZM24 4C26.6264 4 29.2272 4.51732 31.6537 5.52241C34.0802 6.5275 36.285 8.00069 38.1421 9.85786C39.9993 11.715 41.4725 13.9198 42.4776 16.3463C43.4827 18.7728 44 21.3736 44 24C44 25.0609 43.5786 26.0783 42.8284 26.8284C42.0783 27.5786 41.0609 28 40 28H8C6.93913 28 5.92172 27.5786 5.17157 26.8284C4.42143 26.0783 4 25.0609 4 24C4 18.6957 6.10714 13.6086 9.85786 9.85786C13.6086 6.10714 18.6957 4 24 4V4ZM27 34H21L19.84 38L19.3 40H28.7L28.16 38L27 34V34ZM30 30L32 37L32.54 38.9L32.7 40C32.7 42.2 30.9 44 28.7 44H19.3L18.34 43.88C17.3111 43.6145 16.4298 42.9513 15.8897 42.0362C15.3497 41.1211 15.1951 40.029 15.46 39L16 37L18 30H30V30ZM32 14C33.0609 14 34.0783 14.4214 34.8284 15.1716C35.5786 15.9217 36 16.9391 36 18C36 19.0609 35.5786 20.0783 34.8284 20.8284C34.0783 21.5786 33.0609 22 32 22C30.9391 22 29.9217 21.5786 29.1716 20.8284C28.4214 20.0783 28 19.0609 28 18C28 16.9391 28.4214 15.9217 29.1716 15.1716C29.9217 14.4214 30.9391 14 32 14ZM16 14C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 19.0609 19.5786 20.0783 18.8284 20.8284C18.0783 21.5786 17.0609 22 16 22C14.9391 22 13.9217 21.5786 13.1716 20.8284C12.4214 20.0783 12 19.0609 12 18C12 16.9391 12.4214 15.9217 13.1716 15.1716C13.9217 14.4214 14.9391 14 16 14V14Z" fill="currentColor"/>
                      </svg>
                      <span className="text-2xl font-bold">Mycelium</span>
                    </span>
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-stone-100 rounded-md p-2 inline-flex items-center justify-center text-stone-800 hover:text-stone-900 hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-stone-600">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:flex md:space-x-10">
                {navigation.map((item) => (
                  <a key={item.name} href={item.href} className="font-medium text-stone-800 hover:text-stone-900">
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0">
                <span className="inline-flex rounded-md shadow">
                  <a
                    href="#"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-base font-bold rounded-md text-stone-100 bg-stone-800 hover:bg-stone-900"
                  >
                    Log in
                  </a>
                </span>
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-stone-100 ring-1 ring-stone-800 ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <span className="flex justify-center items-center gap-2">
                      <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 24H40C40 16.54 34.88 10.26 28 8.5C27.72 10.48 26 12 24 12C22 12 20.28 10.48 20 8.5C13.12 10.26 8 16.54 8 24ZM24 4C26.6264 4 29.2272 4.51732 31.6537 5.52241C34.0802 6.5275 36.285 8.00069 38.1421 9.85786C39.9993 11.715 41.4725 13.9198 42.4776 16.3463C43.4827 18.7728 44 21.3736 44 24C44 25.0609 43.5786 26.0783 42.8284 26.8284C42.0783 27.5786 41.0609 28 40 28H8C6.93913 28 5.92172 27.5786 5.17157 26.8284C4.42143 26.0783 4 25.0609 4 24C4 18.6957 6.10714 13.6086 9.85786 9.85786C13.6086 6.10714 18.6957 4 24 4V4ZM27 34H21L19.84 38L19.3 40H28.7L28.16 38L27 34V34ZM30 30L32 37L32.54 38.9L32.7 40C32.7 42.2 30.9 44 28.7 44H19.3L18.34 43.88C17.3111 43.6145 16.4298 42.9513 15.8897 42.0362C15.3497 41.1211 15.1951 40.029 15.46 39L16 37L18 30H30V30ZM32 14C33.0609 14 34.0783 14.4214 34.8284 15.1716C35.5786 15.9217 36 16.9391 36 18C36 19.0609 35.5786 20.0783 34.8284 20.8284C34.0783 21.5786 33.0609 22 32 22C30.9391 22 29.9217 21.5786 29.1716 20.8284C28.4214 20.0783 28 19.0609 28 18C28 16.9391 28.4214 15.9217 29.1716 15.1716C29.9217 14.4214 30.9391 14 32 14ZM16 14C17.0609 14 18.0783 14.4214 18.8284 15.1716C19.5786 15.9217 20 16.9391 20 18C20 19.0609 19.5786 20.0783 18.8284 20.8284C18.0783 21.5786 17.0609 22 16 22C14.9391 22 13.9217 21.5786 13.1716 20.8284C12.4214 20.0783 12 19.0609 12 18C12 16.9391 12.4214 15.9217 13.1716 15.1716C13.9217 14.4214 14.9391 14 16 14V14Z" fill="currentColor"/>
                      </svg>
                      <span className="text-xl font-bold">Mycelium</span>
                    </span>
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-stone-100 rounded-md p-2 inline-flex items-center justify-center text-stone-800 hover:text-stone-500 hover:bg-stone-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-stone-600">
                      <span className="sr-only">Close menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="px-2 pt-2 pb-3">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-3 py-2 rounded-md text-base font-medium text-stone-800 hover:text-stone-900 hover:bg-stone-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <a
                  href="#"
                  className="block w-full px-5 py-3 text-center font-medium text-stone-100 bg-stone-800 hover:bg-stone-900"
                >
                  Log in
                </a>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>
  )
}