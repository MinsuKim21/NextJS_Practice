import Link from 'next/link';
import React from 'react';

export default function ContactPage() {
  return (
    <main className="page">
      <h1>Contact Me</h1>
      <p>minsu020302@gmail.com</p>
      <div className="flex space-x-3">
        {/* <Link /> */}
      </div>
      <h1>Or Send me an email</h1>
      <div>이메일폼</div>
    </main>
  );
}
