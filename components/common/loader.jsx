'use client';
import React, { useEffect, useState } from 'react';
import greetings from '@/data/hello.json';

function LoadingScreen() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // Select initial random greeting
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)].word;
    setGreeting(randomGreeting);

    // Cycle through greetings while loading
    const greetingInterval = setInterval(() => {
      const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)].word;
      setGreeting(randomGreeting);
    }, 5); // Change every 800ms

    // Clear the interval when the page finishes loading
    const loadingInterval = setInterval(() => {
      if (typeof gsap !== 'undefined') {
        clearInterval(loadingInterval);
        clearInterval(greetingInterval); // Stop cycling greetings
        
        const svg = document.getElementById('svg');
        const tl = gsap.timeline();
        const curve = 'M0 502S175 272 500 272s500 230 500 230V0H0Z';
        const flat = 'M0 2S175 1 500 1s500 1 500 1V0H0Z';

        tl.to('.loader-wrap-heading .load-text , .loader-wrap-heading .cont', {
          delay: 1.5,
          y: -100,
          opacity: 0,
        });
        tl.to(svg, {
          duration: 0.5,
          attr: { d: curve },
          ease: 'power2.easeIn',
        }).to(svg, {
          duration: 0.5,
          attr: { d: flat },
          ease: 'power2.easeOut',
        });
        tl.to('.loader-wrap', { y: -1500 });
        tl.to('.loader-wrap', { zIndex: -1, display: 'none' });
        tl.from('header', { y: 200 }, '-=1.5');
        tl.from(
          'header .container',
          { y: 40, opacity: 0, delay: 0.3 },
          '-=1.5'
        );
      }
    }, 100);

    // Cleanup intervals on component unmount
    return () => {
      clearInterval(greetingInterval);
      clearInterval(loadingInterval);
    };
  }, []);

  return (
    <div className="loader-wrap">
      <svg viewBox="0 0 1000 1000" preserveAspectRatio="none">
        <path id="svg" d="M0,1005S175,995,500,995s500,5,500,5V0H0Z"></path>
      </svg>

      <div className="loader-wrap-heading">
        <div className="load-text">
          {greeting.split('').map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
