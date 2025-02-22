import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import * as Icons from 'lucide-react';

const ServiceDetail = () => {
  const { id } = useParams();
  const service = services.find(s => s.id === id);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service not found</h1>
          <Link to="/services" className="text-blue-600 hover:text-blue-700">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = Icons[service.icon as keyof typeof Icons];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96">
        <img
          src={service.imageUrl}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <div className="flex items-center space-x-4 mb-4">
              <IconComponent className="h-12 w-12" />
              <h1 className="text-4xl md:text-5xl font-bold">{service.title}</h1>
            </div>
            <p className="text-xl max-w-2xl">{service.description}</p>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">How We Can Help</h2>
            <p className="text-lg text-gray-600 mb-8">{service.fullDescription}</p>
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services
              .filter(s => s.id !== service.id)
              .slice(0, 3)
              .map(relatedService => {
                const RelatedIconComponent = Icons[relatedService.icon as keyof typeof Icons];
                return (
                  <Link
                    key={relatedService.id}
                    to={`/services/${relatedService.id}`}
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="p-6">
                      <RelatedIconComponent className="h-12 w-12 text-blue-600 mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {relatedService.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{relatedService.description}</p>
                      <p className="text-blue-600 font-semibold">Learn more →</p>
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;