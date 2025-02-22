import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import * as Icons from 'lucide-react';
import HeroSlider from '../components/HeroSlider';

const Home = () => {
  // Using images from public/hero-images folder
  const heroImages = [
    '/hero-images/decdd966-315a-11ef-a8e0-0242ac110002-jpg-regular_image.jpeg'
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <HeroSlider images={heroImages} />

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-gray mb-4">
              Our Services
            </h2>
            <p className="text-xl text-brand-gray/80 max-w-2xl mx-auto">
              Discover how we can help transform your business with our
              comprehensive range of services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = Icons[service.icon as keyof typeof Icons];
              return (
                <Link
                  key={service.id}
                  to={`/services/${service.id}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
                >
                  <div className="relative h-48">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-brand-blue/30 flex items-center justify-center group-hover:bg-brand-blue/60 transition-colors">
                      <IconComponent className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-brand-gray mb-2">
                      {service.title}
                    </h3>
                    <p className="text-brand-gray/80">{service.description}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's work together to unlock your company's full potential and
            drive sustainable growth.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-brand-orange text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-opacity-90 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>

      {/* Logo Section */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <img
              src="/logo.png"
              alt="EPL Solutions Inc"
              className="w-96 h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;