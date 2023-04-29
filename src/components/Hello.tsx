import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function Hello() {
  return (
    <div className="text-center space-y-3 mb-5">
      <Image src={'/images/profile.jpg'} alt="profile image" width={300} height={300} className="rounded-full mx-auto" />
      <h1 className="text-2xl font-black">{`Welcome Minsu\'s blog`}</h1>
      <h2 className="text-xl font-black">💻I want to become a front-end developer💻</h2>
      <h2 className="text-xl font-black">Department of Convergence Software, Myongji Univ.</h2>
      <Link href={'/contact'} className="bg-yellow-400 rounded-lg px-5 py-1 block w-60 mx-auto font-bold">
        Contact Me
      </Link>
    </div>
  );
}
