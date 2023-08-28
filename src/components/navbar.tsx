

import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { classNames, navLinks } from '@/utils/helperfunctions';

import { useRouter } from 'next/router';
import Link from 'next/link';

const NavBar = () => {
    const router = useRouter();
  return (
    <Disclosure as="nav" className="nav-bar shadow w-full  mx-auto md:w-[90vw] absolute">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-0">
            <div className="relative flex h-16 justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex flex-shrink-0 items-center px-5">
                  <Link href="/">

                  <img
                    className="h-12 w-auto"
                    src="/awe-x-logo.png"
                    alt="Awe Oil Limited"
                  />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {navLinks.map((navLink, index) => (
                    <Link
                      href={navLink.href}
                      className={`inline-flex items-center uppercase border-b-2 px-5 pt-1 text-sm font-bold ${
                        router.pathname === navLink.href
                          ? 'border-orange-500 bg-orange-50 text-primary'
                          : 'border-transparent text-gray-900 hover:border-orange-200 hover:text-gray-700'
                      } ${
                        index === navLinks.length - 1
                          ? 'bg-accent text-white'
                          : ''
                      }`}
                    >
                      {navLink.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-4 pt-2">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              {navLinks.map((navLink, index) => (
                <Disclosure.Button
                  as="a"
                  href={navLink.href}
                  key={navLink.name}
                  className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${
                    router.pathname === navLink.href
                      ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                  } ${
                    index === navLinks.length - 1 ? 'bg-accent text-white' : ''
                  } px-1 pt-1 text-sm font-medium`}
                >
                  {navLink.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};


export default NavBar;