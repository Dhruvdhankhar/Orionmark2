"use client"

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="bg-background shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Orionmark
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link href="#services" className="text-foreground hover:text-primary transition-colors">Services</Link>
          <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</Link>
          <Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
          <Button onClick={scrollToContact}>Get Started</Button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col items-center py-4 space-y-2">
            <Link href="#services" className="text-foreground hover:text-primary transition-colors">Services</Link>
            <Link href="#testimonials" className="text-foreground hover:text-primary transition-colors">Testimonials</Link>
            <Link href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
              {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            </Button>
            <Button onClick={scrollToContact} className="w-full max-w-xs">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;