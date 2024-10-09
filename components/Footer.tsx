import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Orionmark</h3>
            <p className="text-sm">Your Digital Marketing Partner</p>
          </div>
          <nav className="flex space-x-4 mb-4 md:mb-0">
            <Link href="#services" className="hover:text-accent transition-colors">Services</Link>
            <Link href="#testimonials" className="hover:text-accent transition-colors">Testimonials</Link>
            <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
          </nav>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-accent transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-accent transition-colors"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;