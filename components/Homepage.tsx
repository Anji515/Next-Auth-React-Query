import Image from 'next/image';
import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      {/* Welcome Section */}
      <section className="mb-8">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our All type of Maintenance Services</h1>
        <p className="text-lg">
          At <strong>Pride Facility Management Services</strong>, we are dedicated to providing high-quality electrical maintenance
          services. From skilled manpower to reliable product delivery, we've got you covered.
        </p>
      </section>

      {/* Call to Action Buttons */}
      <section className="flex space-x-4 mb-8">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md">Get Started</button>
        <button className="bg-gray-500 text-white px-4 py-2 rounded-md">Learn More</button>
      </section>

      {/* Featured Services Carousel */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Services</h2>
        <div className="flex space-x-4 overflow-x-auto">
        <div>
            <Image
              src="https://st4.depositphotos.com/22295624/24051/i/450/depositphotos_240517962-stock-photo-businessman-construction-concept.jpg"
              alt="Service 1"
              width={1200}
              height={500}
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="mt-2">Skilled Manpower</p>
          </div>
          <div>
            <Image
              src="https://www.appjetty.com/blog/wp-content/uploads/2018/05/Track-Your-Delivery-Process.png"
              alt="Service 2"
              width={1200}
              height={500}
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="mt-2">Product Delivery</p>
          </div>
          <div>
            <Image
              src="https://img.freepik.com/premium-photo/cartoon-characters-construction-company-3d-illustration_764664-28521.jpg?size=338&ext=jpg&ga=GA1.1.1826414947.1698883200&semt=ais"
              alt="Service 3"
              width={1200}
              height={500}
              className="w-full h-48 object-cover rounded-md"
            />
            <p className="mt-2">Electrical Installation</p>
          </div>
        </div>
      </section>

      {/* Additional Options Section */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Explore Our Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Manpower Services</h3>
            <p>Our skilled team ensure efficient and reliable services for your projects.</p>
          </div>
          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Product Delivery</h3>
            <p>Explore our range of all type of products delivered right to your doorstep.</p>
          </div>
          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-xl font-semibold mb-2">Installation & Maintenance</h3>
            <p>We specialize in installation and long-term maintenance contracts.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
