import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About EPL Solutions
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              A forward-thinking consulting company dedicated to helping businesses establish a strong foundation for success in the 21st century and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To empower businesses with innovative solutions that drive sustainable growth and success in an ever-evolving market landscape.
              </p>
            </div>
            <div className="text-center">
              <Target className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading catalyst for business transformation, helping companies navigate and thrive in the digital age.
              </p>
            </div>
            <div className="text-center">
              <Globe className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Reach</h3>
              <p className="text-gray-600">
                Serving clients globally with a comprehensive understanding of regional markets and regulatory environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Description */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
            <p className="text-lg text-gray-600 mb-6">
              At EPL Solutions, we take a comprehensive approach to business consulting. We analyze market conditions through both macro and micro lenses, considering the social and political climate across different regions.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our focus on sustainability and government policies ensures that our clients are not just compliant, but are positioned to thrive in an environmentally conscious world.
            </p>
            <p className="text-lg text-gray-600">
              By offering tailored solutions, we empower businesses to operate efficiently and grow sustainably in an ever-changing world.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8">
            Let's work together to unlock your company's full potential.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;