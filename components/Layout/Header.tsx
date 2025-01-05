'use client';
import HeaderDecorator from "@/components/Decorators/HeaderDecorator";
import Image from 'next/image';
import Link from 'next/link';
import GitHubImage from '@/public/github-mark-white.svg';

function Header() {
  return (
    <HeaderDecorator>
      <header className="relative w-screen px-10 flex items-center justify-center">
        <div
          className="relative font-ps2p text-2xl text-background font-bold tracking-widest cursor-pointer"
          onClick={() => window.location.reload()}
        >
          Pokedex
        </div>
        <div className="absolute right-10 font-ps2p text-sm text-background font-bold tracking-widest">
          <Link href="https://github.com/frgonzal/pokedex">
            <Image
              src={GitHubImage}
              width={20}
              alt="GitHub Repository"
              className="cursor-pointer"
            />
          </Link>
        </div>
      </header>
    </HeaderDecorator>
  );
};

export default Header;