import React from 'react';
import Nav from './Nav';
import Link from 'next/link';
import Menu from './Menu';

export default function Header() {
  return (
    <header className="w-full flex justify-center h-16 py-5 px-5 md:px-12 sm:px-10 fixed bg-white">
      <div className="max-w-screen-lg w-full flex justify-between items-center">
        <Link href="/" className="sm:text-2xl text-xl font-black">
          <h1>Minsu's BLOG</h1>
        </Link>
        <Nav />
        <Menu />
      </div>
    </header>
  );
}
