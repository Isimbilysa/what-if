'use client';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter(); // Access the router object
  const pathname = usePathname()
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };


  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={` ${pathname.startsWith('/admin') ? 'hidden' : ''} fixed w-full top-0 z-50  md:px-[150px] px-4 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-1' : 'bg-gradient-to-b from-black/60 to-transparent py-0'
        }`}
    >
      <div className="py-3 w-full flex items-center justify-between">
        {/* <div className="flex justify-between items-center h-16 w-full"> */}
        <div className={`flex-shrink-0 text-[16px]  pr-9 ${scrolled ? 'text-black' : 'text-white'}`}>
          WHAT IF
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <Link
            href="/"
            className={`${isActive('/')
              ? `border-b-2 ${scrolled ? 'text-primary border-primary' : 'text-white border-white'}`
              : `hover:text-primary ${scrolled ? 'text-secondary' : 'text-white'}`
              }`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`${isActive('/about-us')
              ? `border-b-2 ${scrolled ? 'text-primary border-primary' : 'text-white border-white'}`
              : `hover:text-primary ${scrolled ? 'text-secondary' : 'text-white'}`
              }`}
          >
            About Us
          </Link>
          <Link
            href="/stories"
            className={`${isActive('/stories')
              ? `border-b-2 ${scrolled ? 'text-primary border-primary' : 'text-white border-white'}`
              : `hover:text-primary ${scrolled ? 'text-secondary' : 'text-white'}`
              }`}
          >
            Stories
          </Link>
          <Link
            href="/gallery"
            className={`${isActive('/gallery')
              ? `border-b-2 ${scrolled ? 'text-primary border-primary' : 'text-white border-white'}`
              : `hover:text-primary ${scrolled ? 'text-secondary' : 'text-white'}`
              }`}
          >
            Gallery
          </Link>
          <Link
            href="/contact-us"
            className={`${isActive('/contact-us')
              ? `border-b-2 ${scrolled ? 'text-primary border-primary' : 'text-white border-white'}`
              : `hover:text-primary ${scrolled ? 'text-secondary' : 'text-white'}`
              }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            {mobileMenuOpen ? (
              <XMarkIcon className={`h-8 w-8  ${scrolled ? 'text-black' : 'text-white'} `} />
            ) : (
              <Bars3Icon className={`h-8 w-8  ${scrolled ? 'text-black' : 'text-white'} `} />
            )}
          </button>
        </div>

        {/* Get Involved Button */}
        <div className="hidden md:flex items-center ">
          <Link href={'/admin'}>
          <button
              className={`flex items-center px-4 py-2 rounded-md border-2 transition-all ${scrolled
                ? 'bg-transparent text-secondary border-transparent hover:bg-white  hover:opacity-80'
                : 'bg-transparent text-white/50 border-transparent  hover:text-primary'
                }`}
            >
              Admins
            </button>
          </Link>
          <button
            className={`flex items-center px-4 py-2 rounded-md border-2 transition-all ${scrolled
              ? 'bg-primary text-white border-transparent hover:bg-white hover:text-primary hover:border-primary'
              : 'bg-transparent text-white border-white hover:bg-white hover:text-primary'
              }`}
          >
            Get Involved
          </button>

        </div>
      </div>
      {/* </div> */}

      {/* Mobile Menu Links */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4">
          <Link
            href="/"
            className={`block px-4 py-2 ${isActive('/')
              ? 'text-primary border-b-2 border-primary'
              : 'text-secondary hover:text-primary'
              }`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`block px-4 py-2 ${isActive('/about-us')
              ? 'text-primary border-b-2 border-primary'
              : 'text-secondary hover:text-primary'
              }`}
          >
            About Us
          </Link>
          <Link
            href="/stories"
            className={`block px-4 py-2 ${isActive('/stories')
              ? 'text-primary border-b-2 border-primary'
              : 'text-secondary hover:text-primary'
              }`}
          >
            Stories
          </Link>
          <Link
            href="/gallery"
            className={`block px-4 py-2 ${isActive('/gallery')
              ? 'text-primary border-b-2 border-primary'
              : 'text-secondary hover:text-primary'
              }`}
          >
            Gallery
          </Link>
          <Link
            href="/contact-us"
            className={`block px-4 py-2 ${isActive('/contact-us')
              ? 'text-primary border-b-2 border-primary'
              : 'text-secondary hover:text-primary'
              }`}
          >
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
