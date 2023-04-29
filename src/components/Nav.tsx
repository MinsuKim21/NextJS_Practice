'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { name: 'home', path: '/' },
  { name: 'about', path: '/about' },
  { name: 'posts', path: '/posts' },
  { name: 'contact', path: '/contact' },
];

const activeStyle = 'text-blue-500 py-1 border-b-2 border-blue-500';
const inactiveStyle = 'py-2 hover:opacity-50';

export default function Nav() {
  const currentPath = usePathname();

  const isActive = (path: string) => {
    return currentPath === path ? activeStyle : inactiveStyle;
  };

  return (
    <nav className="text-lg font-bold sm:block hidden">
      <div className="flex justify-center space-x-5">
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
    </nav>
  );
}
