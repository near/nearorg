import { ArrowUpRight, Menu, X } from 'lucide-react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import NewPostBadge from '@/components/pages/NearAI/NewPostBadge';
import XIcon from '@/components/pages/NearAI/XIcon';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  alpha?: boolean;
  onClick?: () => void;
}

const NavLink = ({ href, children, external, alpha, onClick }: NavLinkProps) => (
  <Link
    href={href}
    className="group flex items-center gap-2 text-[#AFD0C5] hover:text-white transition-colors px-4 py-2"
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    onClick={onClick}
  >
    <span className="flex items-center gap-1">
      {children}
      {alpha && <span className="text-[#00EB9A]">alpha</span>}
    </span>
    {external && (
      <span className="opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowUpRight className="h-4 w-4" />
      </span>
    )}
  </Link>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-200
        ${isScrolled ? 'bg-black/70 backdrop-blur-xl' : 'bg-transparent'}
      `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <Link href="/" className="text-2xl font-bold">
              <img src="/logo-white.svg" alt="NEAR AI" className="h-5" />
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-2">
              <NavLink href="https://app.near.ai" external alpha>
                Research Hub
              </NavLink>
              <NavLink href="https://chat.near.ai" external alpha>
                AI Assistant
              </NavLink>
              <NavLink href="/rfps">Proposals</NavLink>
              <NavLink href="/blog">
                Blog
                <NewPostBadge />
              </NavLink>
              <a
                href="https://x.com/near_ai"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#AFD0C5] hover:text-white transition-colors"
                aria-label="Follow NEAR AI on X"
              >
                <XIcon className="h-5 w-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`
        fixed inset-0 bg-black/95 backdrop-blur-xl z-40 lg:hidden
        transition-opacity duration-300
        ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-lg">
          <NavLink href="https://app.near.ai" external alpha onClick={closeMobileMenu}>
            Research Hub
          </NavLink>
          <NavLink href="https://chat.near.ai" external alpha onClick={closeMobileMenu}>
            AI Assistant
          </NavLink>
          <NavLink
            href="https://youtube.com/playlist?list=PL9tzQn_TEuFWMuPiQOXhaE5lpOTnxLPZY"
            external
            onClick={closeMobileMenu}
          >
            AI Office Hours
          </NavLink>
          <NavLink href="/proposals" onClick={closeMobileMenu}>
            Proposals
          </NavLink>
          <NavLink href="/blog" onClick={closeMobileMenu}>
            Blog
          </NavLink>
          <a
            href="https://x.com/near_ai"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-[#AFD0C5] hover:text-white transition-colors"
            aria-label="Follow NEAR AI on X"
          >
            <XIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
