import Hello from '@/components/Hello';
import React from 'react';

export default function AboutPage() {
  return (
    <main className="page">
      <Hello />
      <div className="bg-gray-100 rounded-sm text-center space-y-2 py-8">
        <h1 className="font-bold text-2xl">Who am I?</h1>
        <pre className="font-[pretendard]">{'팔로워쉽과 리더쉽을 겸비한 개발자\n새로운것에 대한 도전을 마다하지 않는 개발자'}</pre>
        <h1 className="font-bold text-2xl"> skills</h1>
        <pre className="font-[pretendard]">{'Javascript, Typescript, Solidity\n React, NextJS, Tailwindcss\n Git, VSC, Mysql'}</pre>
      </div>
    </main>
  );
}
