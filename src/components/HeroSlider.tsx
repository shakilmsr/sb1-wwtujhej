import React, { useState, useEffect } from 'react';

const heroMessages = [
  {
    title: "Transforming Business Through Innovation",
    subtitle: "Empowering your digital journey with cutting-edge solutions"
  },
  {
    title: "Strategic Solutions for Modern Challenges",
    subtitle: "Navigate the future with confidence and expertise"
  },
  {
    title: "Building Tomorrow's Success Today",
    subtitle: "Partner with us to achieve your business goals"
  },
  {
    title: "Excellence in Digital Transformation",
    subtitle: "Your trusted partner in business evolution"
  }
];

interface HeroSliderProps {
  images: string[];
}

const HeroSlider: React.FC<HeroSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setCurrentMessage((prevMessage) => (prevMessage + 1) % heroMessages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative h-[600px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50" />
          </div>
        </div>
      ))}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <div className="text-center max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-opacity duration-500">
            {heroMessages[currentMessage].title}
          </h1>
          <p className="text-xl md:text-2xl transition-opacity duration-500">
            {heroMessages[currentMessage].subtitle}
          </p>
          <button className="mt-8 bg-brand-orange text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;