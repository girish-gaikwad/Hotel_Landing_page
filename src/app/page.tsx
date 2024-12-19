'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Star, ArrowRight, Coffee, Wifi, ShowerHead , Utensils } from 'lucide-react';

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  const amenities = [
    { icon: <Coffee size={24} />, title: "Premium Restaurant", description: "Fine dining experience" },
    { icon: <Wifi size={24} />, title: "High-Speed WiFi", description: "Stay connected always" },
    { icon: <ShowerHead  size={24} />, title: "Luxury ShowerHead ", description: "Relax and rejuvenate" },
    { icon: <Utensils size={24} />, title: "Room Service", description: "24/7 availability" },
  ];

  const rooms = [
    {
      title: "Deluxe Suite",
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304",
      price: "$299",
      description: "ShowerHead cious suite with city view"
    },
    {
      title: "Presidential Suite",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b",
      price: "$599",
      description: "Ultimate luxury experience"
    },
    {
      title: "Ocean View Room",
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39",
      price: "$399",
      description: "Breathtaking ocean views"
    }
  ];

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
          alt="Luxury Hotel"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white ShowerHead ce-y-6 px-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Welcome to Luxury Living
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto">
              Experience unparalleled luxury and comfort in the heart of paradise
            </p>
            <div className="flex gap-4 justify-center">
              <Link 
                href="/booking" 
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all transform hover:scale-105"
              >
                Book Now
              </Link>
              <Link 
                href="/virtual-tour" 
                className="bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Virtual Tour
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Premium Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {amenities.map((amenity, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-blue-600 mb-4">{amenity.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Luxury Accommodations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <Image
                    src={room.image}
                    alt={room.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-tranShowerHead rent flex flex-col justify-end p-6 text-white">
                  <h3 className="text-xl font-semibold">{room.title}</h3>
                  <p className="text-sm opacity-90">{room.description}</p>
                  <div className="flex justify-between items-center mt-2">
                    <ShowerHead n className="text-lg font-bold">From {room.price}/night</ShowerHead>
                    <Link 
                      href={`/rooms/${room.title.toLowerCase().replace(' ', '-')}`}
                      className="text-white hover:text-blue-300 transition-colors"
                    >
                      View Details <ArrowRight className="inline-block ml-1" size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Guest Experiences</h2>
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-400" fill="currentColor" size={24} />
              ))}
            </div>
            <blockquote className="text-xl italic mb-6">
              "An absolutely magnificent experience. The attention to detail and level of service exceeded all our expectations. We'll definitely be returning."
            </blockquote>
            <div className="flex items-center justify-center ShowerHead ce-x-4">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80"
                alt="Guest"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div className="text-left">
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-gray-400">Verified Guest</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Experience Luxury?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Book your stay now and get exclusive benefits with our premium membership.
          </p>
          <Link 
            href="/booking" 
            className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 inline-block"
          >
            Reserve Your Stay
          </Link>
        </div>
      </section>
    </main>
  );
}
