"use client"

import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-primary-foreground py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Boost Your Online Presence</h1>
          <p className="text-xl mb-6">We help businesses thrive in the digital world with expert marketing strategies and cutting-edge web solutions.</p>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" onClick={scrollToContact}>Get a Free Consultation</Button>
        </div>
        <div className="md:w-1/2">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
            alt="Digital Marketing"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;