'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, ChevronDown } from 'lucide-react';

export default function DealersPage() {
  const [filteredDealers, setFilteredDealers] = useState([
    {
      id: 1,
      name: "CMC (New Holland Dealer)",
      phone: "722283433",
      address: "Lusaka Rd, Nairobi",
      region: "Nairobi",
      dealer: "CMC",
    },
    {
      id: 2,
      name: "Mascor (John Deere)",
      phone: "254 207 602 298",
      address: "Uganda Rd, Eldoret",
      region: "Eldoret",
      dealer: "Mascor",
    },
    {
      id: 3,
      name: "FMD Marsay Furguson dealership",
      phone: "N/A",
      address: "Nairobi, Kenya",
      region: "Nairobi",
      dealer: "FMD",
    },
    // Add other dealers as necessary
  ]);

  const handleFilterChange = (filterType, value) => {
    const newFilteredDealers = [
      {
        id: 1,
        name: "CMC (New Holland Dealer)",
        phone: "722283433",
        address: "Lusaka Rd, Nairobi",
        region: "Nairobi",
        dealer: "CMC",
      },
      {
        id: 2,
        name: "Mascor (John Deere)",
        phone: "254 207 602 298",
        address: "Uganda Rd, Eldoret",
        region: "Eldoret",
        dealer: "Mascor",
      },
      {
        id: 3,
        name: "FMD Marsay Furguson dealership",
        phone: "N/A",
        address: "Nairobi, Kenya",
        region: "Nairobi",
        dealer: "FMD",
      },
    ].filter(dealer => dealer[filterType] === value);

    setFilteredDealers(newFilteredDealers);
  };

  return (
    <div className="w-full bg-[#FCFCFC] min-h-screen font-avenir">
      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <h1 className="text-4xl font-merriweather font-bold mb-8 text-gray-800">Licensed Tractor Dealers</h1>

        {/* Filter Section */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <div className="flex items-center">
            <label htmlFor="region" className="text-sm font-medium text-gray-700 mr-2">Region:</label>
            <div className="relative">
              <select
                id="region"
                className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                onChange={(e) => handleFilterChange('region', e.target.value)}
              >
                <option value="Nairobi">Nairobi</option>
                <option value="Mombasa">Mombasa</option>
                <option value="Eldoret">Eldoret</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>

          <div className="flex items-center">
            <label htmlFor="dealer" className="text-sm font-medium text-gray-700 mr-2">Dealer Type:</label>
            <div className="relative">
              <select
                id="dealer"
                className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-4 pr-10 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                onChange={(e) => handleFilterChange('dealer', e.target.value)}
              >
                <option value="CMC">CMC (New Holland Dealer)</option>
                <option value="Mascor">Mascor (John Deere)</option>
                <option value="FMD">FMD (Massey Ferguson)</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
            </div>
          </div>
        </div>

        {/* Dealer List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDealers.map((dealer) => (
            <div key={dealer.id} className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <div className="p-6">
                <h2 className="font-merriweather font-semibold text-xl mb-2 text-gray-800">{dealer.name}</h2>
                <div className="flex items-center text-gray-600 mb-2">
                  <Phone size={16} className="mr-2" />
                  <p className="text-sm">{dealer.phone}</p>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={16} className="mr-2" />
                  <p className="text-sm">{dealer.address}</p>
                </div>
                <Link 
                  href={`/dealers/${dealer.id}`} 
                  className="inline-block mt-2 px-4 py-2 bg-orange-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-orange-600 transition duration-300 ease-in-out"
                >
                  View Profile
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Map */}
        <div className="mt-12">
          <h2 className="text-3xl font-merriweather font-semibold mb-6 text-gray-800">Interactive Map of Dealers</h2>
          <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-500">Map component goes here</p>
          </div>
        </div>
      </main>
    </div>
  );
}