import Link from 'next/link';
import Image from 'next/image';
import GitHubImage from '@/public/github-mark.svg';

const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto text-center">
        <nav className="flex justify-center mt-2 space-x-4">
          <Link href="https://github.com/frgonzal/pokedex">
            <Image
              src={GitHubImage}
              width={20}
              alt="GitHub Repository"
              className="cursor-pointer"
            />
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;