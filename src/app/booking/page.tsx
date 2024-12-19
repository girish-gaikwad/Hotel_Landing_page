"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Calendar, Users, CreditCard, BedDouble, Clock, Coffee, Wifi, Tv } from 'lucide-react';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '',
    roomType: '',
    name: '',
    email: '',
    phone: '',
    specialRequests: '',
    paymentMethod: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const roomTypes = {
    deluxe: {
      name: 'Deluxe Room',
      price: 200,
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32',
      amenities: ['Free WiFi', 'Room Service', 'Mini Bar', 'TV']
    },
    suite: {
      name: 'Suite',
      price: 350,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b',
      amenities: ['Free WiFi', 'Room Service', 'Living Area', 'Kitchen']
    },
    executive: {
      name: 'Executive Suite',
      price: 500,
      image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304',
      amenities: ['Free WiFi', 'Butler Service', 'Jacuzzi', 'Ocean View']
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSelectChange = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsLoading(false);
    setShowSummary(true);
  };

  const calculateTotal = () => {
    if (!formData.roomType || !formData.checkIn || !formData.checkOut) return 0;
    const days = Math.ceil(
      (new Date(formData.checkOut) - new Date(formData.checkIn)) / (1000 * 60 * 60 * 24)
    );
    return roomTypes[formData.roomType]?.price * days || 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[30vh] bg-gray-900">
        <Image
          src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461"
          alt="Luxury Booking"
          fill
          className="object-cover opacity-70"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Book Your Stay</h1>
            <p className="text-xl">Experience luxury like never before</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex justify-between items-center">
              {['Dates & Room', 'Guest Details', 'Payment'].map((stepName, index) => (
                <div key={index} className="flex-1 text-center">
                  <div 
                    className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center mb-2 
                      ${step > index + 1 ? 'bg-green-500 text-white' : 
                        step === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                  >
                    {index + 1}
                  </div>
                  <p className="text-sm">{stepName}</p>
                </div>
              ))}
            </div>
            <div className="relative mt-2">
              <div className="absolute top-0 left-0 h-1 bg-gray-200 w-full">
                <div 
                  className="h-full bg-blue-600 transition-all duration-300"
                  style={{ width: `${((step - 1) / 2) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {showSummary ? (
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Booking Confirmed!</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-green-600">
                  <Clock size={20} />
                  <span>Confirmation sent to your email</span>
                </div>
                <div className="border-t pt-4">
                  <h3 className="font-semibold mb-2">Booking Details</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-gray-600">Check-in</p>
                      <p className="font-medium">{formData.checkIn}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Check-out</p>
                      <p className="font-medium">{formData.checkOut}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Room Type</p>
                      <p className="font-medium">{roomTypes[formData.roomType]?.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Guests</p>
                      <p className="font-medium">{formData.guests}</p>
                    </div>
                  </div>
                </div>
                <Button 
                  className="w-full mt-6"
                  onClick={() => window.location.href = '/dashboard'}
                >
                  View Booking Details
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
              {step === 1 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="checkIn">Check-in Date</Label>
                      <div className="relative">
                        <Input
                          type="date"
                          id="checkIn"
                          name="checkIn"
                          value={formData.checkIn}
                          onChange={handleChange}
                          required
                          className="pl-10"
                        />
                        <Calendar className="absolute left-3 top-2.5 text-gray-400" size={20} />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="checkOut">Check-out Date</Label>
                      <div className="relative">
                        <Input
                          type="date"
                          id="checkOut"
                          name="checkOut"
                          value={formData.checkOut}
                          onChange={handleChange}
                          required
                          className="pl-10"
                        />
                        <Calendar className="absolute left-3 top-2.5 text-gray-400" size={20} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="guests">Number of Guests</Label>
                    <div className="relative">
                      <Input
                        type="number"
                        id="guests"
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        min="1"
                        required
                        className="pl-10"
                      />
                      <Users className="absolute left-3 top-2.5 text-gray-400" size={20} />
                    </div>
                  </div>

                  <div>
                    <Label>Select Room Type</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                      {Object.entries(roomTypes).map(([key, room]) => (
                        <div
                          key={key}
                          className={`border rounded-lg p-4 cursor-pointer transition-all
                            ${formData.roomType === key ? 'border-blue-600 bg-blue-50' : 'hover:border-gray-300'}`}
                          onClick={() => handleSelectChange('roomType', key)}
                        >
                          <div className="relative h-32 mb-4 rounded-lg overflow-hidden">
                            <Image
                              src={room.image}
                              alt={room.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <h3 className="font-semibold">{room.name}</h3>
                          <p className="text-blue-600 font-bold">${room.price}/night</p>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {room.amenities.map((amenity, index) => (
                              <span 
                                key={index}
                                className="text-xs bg-gray-100 px-2 py-1 rounded-full"
                              >
                                {amenity}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="specialRequests">Special Requests</Label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={formData.specialRequests}
                      onChange={handleChange}
                      className="w-full p-2 border rounded-lg min-h-[100px]"
                    />
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold mb-4">Booking Summary</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>Room Type</span>
                        <span>{roomTypes[formData.roomType]?.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Dates</span>
                        <span>{formData.checkIn} - {formData.checkOut}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Guests</span>
                        <span>{formData.guests}</span>
                      </div>
                      <div className="flex justify-between font-bold pt-3 border-t">
                        <span>Total Amount</span>
                        <span>${calculateTotal()}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label>Payment Method</Label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                      {['Credit Card', 'PayPal', 'Bank Transfer'].map((method) => (
                        <div
                          key={method}
                          className={`border rounded-lg p-4 cursor-pointer transition-all flex items-center gap-3
                            ${formData.paymentMethod === method ? 'border-blue-600 bg-blue-50' : 'hover:border-gray-300'}`}
                          onClick={() => handleSelectChange('paymentMethod', method)}
                        >
                          <CreditCard size={20} />
                          {method}
                        </div>
                      ))}
                    </div>
                  </div>

                  <Alert>
                    <AlertDescription>
                      Your payment information is encrypted and secure. We never store your card details.
                    </AlertDescription>
                  </Alert>
                </div>
              )}

              <div className="flex justify-between mt-8">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                  >
                    Previous
                  </Button>
                )}
                <Button
                  type="button"
                  className={step === 3 ? 'bg-green-600 hover:bg-green-700' : ''}
                  disabled={isLoading}
                  onClick={() => {
                    if (step < 3) setStep(step + 1);
                    else handleSubmit(new Event('submit'));
                  }}
                >
                  {isLoading ? 'Processing...' : step === 3 ? 'Confirm Booking' : 'Next'}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}