'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { HiMenu } from 'react-icons/hi';

const navItems = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'posts', path: '/posts' },
  { name: 'contact', path: '/contact' },
];

const activeStyle = 'text-blue-500 py-1 border-b-2 border-blue-500';
const inactiveStyle = 'py-2 hover:opacity-50';

export default function Menu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const outsideRef = useRef<HTMLDivElement>(null);
  const currentPath = usePathname();

  const isActive = (path: string) => {
    return currentPath === path ? activeStyle : inactiveStyle;
  };

  const handleChangeMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (outsideRef.current && !outsideRef.current.contains(e.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <>
      <HiMenu className={`w-8 h-8 sm:hidden ${isMenuOpen ? 'hidden' : 'block'}`} onClick={handleChangeMenu} />
      {isMenuOpen ? (
        <div ref={outsideRef} className="flex flex-col justify-center space-y-7 fixed top-0 right-0 border h-full w-32 items-center">
          {navItems.map((item, index) => {
            return (
              <li key={index} className="list-none">
                <Link href={item.path} className={isActive(item.path)}>
                  {item.name.toUpperCase()}
                </Link>
              </li>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
