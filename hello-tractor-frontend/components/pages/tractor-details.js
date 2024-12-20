'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-orange-500 fill-orange-500' : 'text-gray-300'
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
};

const Review = ({ author, date, content, rating }) => {
  return (
    <div className="mb-6 border-b border-gray-200 pb-6 last:border-0">
      <div className="flex items-center mb-2">
        <Image
          src="/avatar.png"
          alt={author}
          className="w-12 h-12 rounded-full"
          width={48}
          height={48}
        />
        <div className="ml-4">
          <h4 className="font-avenir font-semibold text-gray-900">{author}</h4>
          <div className="flex items-center">
            <StarRating rating={rating} />
            <span className="ml-2 text-sm text-gray-500">{date}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 font-avenir">{content}</p>
    </div>
  );
};

export default function TractorDetailsPage({
  id,
  make = "Formatic Epic 5 Pro",
  model = "2023",
  price = "550.00",
  engine_power = "120",
  hours_used = "1200",
  fuel_type = "Diesel",
  year_of_manufacturing = "2023",
  relatedTractors = [],
  location = "Nairobi"
}) {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState('');
  const router = useRouter()

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    // Here you would typically send the review to your backend
    console.log('Submitting review:', { rating: userRating, review: userReview });
    // Reset form
    setUserRating(0);
    setUserReview('');
  };

  return (
    <div className="bg-white min-h-screen font-avenir">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column - Image */}
          <div className="bg-white p-4 rounded-lg">
            <Image
              src='/TractorImage.png'
              alt={make}
              className="w-full h-auto object-contain rounded-lg"
              width={600}
              height={400}
              priority
            />
            <div className="flex justify-between items-center mt-4">
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm mt-1">{hours_used} Hours</span>
                </div>
                {/* Add more spec icons as needed */}
              </div>
            </div>
          </div>

          {/* Right Column - Details */}
          <div className="bg-white p-4">
            <div className="flex justify-between items-start mb-4">
              <h1 className="text-3xl font-merriweather font-bold text-gray-900">{make}</h1>
              <div className="flex space-x-2">
                <button 
                  onClick={handleWishlist}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <svg 
                    className={`w-6 h-6 ${isWishlisted ? 'text-red-500 fill-red-500' : 'text-gray-500'}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-100">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="mb-6">
              <span className="text-2xl font-bold text-orange-500">sh{price}</span>
              <span className="text-sm text-gray-500 ml-2">(1 Available)</span>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-merriweather font-semibold mb-2">Description</h2>
                <p className="text-gray-600">
                  Premium quality tractor with advanced features and excellent performance. Perfect for agricultural and construction work.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-merriweather font-semibold mb-4">Specifications</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="flex justify-between">
                      <span className="text-gray-600">Make:</span>
                      <span className="font-medium">{make}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Model:</span>
                      <span className="font-medium">{model}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Year:</span>
                      <span className="font-medium">{year_of_manufacturing}</span>
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="flex justify-between">
                      <span className="text-gray-600">Engine Power:</span>
                      <span className="font-medium">{engine_power} HP</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Fuel Type:</span>
                      <span className="font-medium">{fuel_type}</span>
                    </p>
                    <p className="flex justify-between">
                      <span className="text-gray-600">Hours Used:</span>
                      <span className="font-medium">{hours_used}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Seller Information */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-start space-x-4">
                  <Image
                    src="/avatar.png"
                    alt="Seller"
                    className="w-16 h-16 rounded-full"
                    width={64}
                    height={64}
                  />
                  <div>
                    <h3 className="font-merriweather font-semibold">Tractors.Inc</h3>
                    <div className="flex items-center mt-1">
                      <svg className="w-4 h-4 text-orange-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-sm text-gray-600">{location}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      <StarRating rating={5} />
                      <span className="ml-2 text-sm text-gray-600">4.8 (120 reviews)</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <button className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                    Contact Seller
                  </button>
                  <button onClick={() => router.push('/messaging')} className="w-full bg-primary hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mt-4">
                    Message Seller
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-merriweather font-bold mb-6">Customer Reviews</h2>
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <Review 
              author="John Doe"
              date="2 days ago"
              content="Excellent tractor, performs really well. The seller was very professional and helpful throughout the process."
              rating={5}
            />
            <Review 
              author="Jane Smith"
              date="1 week ago"
              content="Great value for money. The tractor is in perfect condition and works exactly as described."
              rating={4}
            />
          </div>

          {/* Add Review Form */}
          <div className="mt-8 bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-merriweather font-semibold mb-4">Add a Review</h3>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setUserRating(star)}
                      className={`w-6 h-6 ${
                        star <= userRating ? 'text-orange-500' : 'text-gray-300'
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Your Review
                </label>
                <textarea 
                  value={userReview}
                  onChange={(e) => setUserReview(e.target.value)}
                  placeholder="Write your review here..."
                  className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-orange-500"
                  rows={4}
                />
              </div>
              <button 
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>

        {/* Related Products */}
        <div className="mb-12">
          <h2 className="text-2xl font-merriweather font-bold mb-6">Similar Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedTractors.map((tractor) => (
              <div key={tractor.tractor_id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <Image
                  src='/TractorImage.png'
                  alt={tractor.make}
                  className="w-full h-48 object-cover"
                  width={300}
                  height={200}
                />
                <div className="p-4">
                  <h3 className="font-merriweather font-semibold">{tractor.make}</h3>
                  <p className="text-orange-500 font-bold mt-1">${tractor.price}</p>
                  <button className="w-full mt-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}